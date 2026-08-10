import { mkdir, writeFile } from "node:fs/promises"
import { resolve } from "node:path"
import { pathToFileURL } from "node:url"
import { runAllPlacementChecks } from "@tscircuit/checks"
import { RootCircuit } from "@tscircuit/core"
import type { AnyCircuitElement } from "circuit-json"
import { convertCircuitJsonToPcbSvg } from "circuit-to-svg"
import type { ReactElement } from "react"

const circuitNumbers = [
  101, 104, 105, 109, 111, 112, 114, 123, 134, 137, 138, 140, 141, 142, 143,
  148, 155, 157, 162, 175, 184, 190,
]

const blockingErrorTypes = new Set([
  "pcb_footprint_overlap_error",
  "pcb_component_outside_board_error",
])

type CircuitModule = { default: () => ReactElement }
type PcbComponent = Extract<AnyCircuitElement, { type: "pcb_component" }>
type Bounds = { minX: number; minY: number; maxX: number; maxY: number }

const renderCircuit = async (
  root: string,
  circuitNumber: number,
): Promise<AnyCircuitElement[]> => {
  const circuitPath = resolve(
    root,
    "lib/circuit",
    `circuit${circuitNumber}.tsx`,
  )
  const { default: Circuit } = (await import(
    `${pathToFileURL(circuitPath).href}?placement-snapshot=${root}`
  )) as CircuitModule
  const circuit = new RootCircuit()
  circuit.schematicDisabled = true
  circuit.add(Circuit())
  await circuit.renderUntilSettled()
  return circuit.getCircuitJson()
}

const getPcbComponents = (circuitJson: AnyCircuitElement[]): PcbComponent[] =>
  circuitJson.filter(
    (element): element is PcbComponent => element.type === "pcb_component",
  )

const getChangedSourceComponentIds = (
  beforeJson: AnyCircuitElement[],
  afterJson: AnyCircuitElement[],
): Set<string> => {
  const afterBySourceId = new Map(
    getPcbComponents(afterJson).map((component) => [
      component.source_component_id,
      component,
    ]),
  )
  return new Set(
    getPcbComponents(beforeJson)
      .filter((beforeComponent) => {
        const afterComponent = afterBySourceId.get(
          beforeComponent.source_component_id,
        )
        return (
          afterComponent &&
          (afterComponent.center.x !== beforeComponent.center.x ||
            afterComponent.center.y !== beforeComponent.center.y ||
            afterComponent.rotation !== beforeComponent.rotation)
        )
      })
      .map((component) => component.source_component_id),
  )
}

const getErrorSourceComponentIds = (
  beforeJson: AnyCircuitElement[],
  blockingErrors: AnyCircuitElement[],
): Set<string> => {
  const componentIdByPrimitiveId = new Map<string, string>()
  const sourceIdByComponentId = new Map<string, string>()
  for (const element of beforeJson) {
    if (element.type === "pcb_component") {
      sourceIdByComponentId.set(
        element.pcb_component_id,
        element.source_component_id,
      )
    }
    if (!("pcb_component_id" in element)) continue
    for (const [key, value] of Object.entries(element)) {
      if (key.endsWith("_id") && typeof value === "string") {
        componentIdByPrimitiveId.set(value, element.pcb_component_id)
      }
    }
  }

  const sourceIds = new Set<string>()
  for (const error of blockingErrors) {
    for (const [key, value] of Object.entries(error)) {
      const ids = Array.isArray(value)
        ? value.filter((item): item is string => typeof item === "string")
        : key === "pcb_component_id" && typeof value === "string"
          ? [value]
          : []
      for (const id of ids) {
        const componentId = sourceIdByComponentId.has(id)
          ? id
          : componentIdByPrimitiveId.get(id)
        const sourceId = componentId
          ? sourceIdByComponentId.get(componentId)
          : undefined
        if (sourceId) sourceIds.add(sourceId)
      }
    }
  }
  return sourceIds
}

const getComponentBounds = (component: PcbComponent): Bounds => {
  const rotation = ((component.rotation ?? 0) * Math.PI) / 180
  const halfWidth =
    (Math.abs(Math.cos(rotation)) * component.width +
      Math.abs(Math.sin(rotation)) * component.height) /
    2
  const halfHeight =
    (Math.abs(Math.sin(rotation)) * component.width +
      Math.abs(Math.cos(rotation)) * component.height) /
    2
  return {
    minX: component.center.x - halfWidth,
    minY: component.center.y - halfHeight,
    maxX: component.center.x + halfWidth,
    maxY: component.center.y + halfHeight,
  }
}

const getViewport = (
  beforeJson: AnyCircuitElement[],
  afterJson: AnyCircuitElement[],
  sourceComponentIds: Set<string>,
): Bounds => {
  const focusedComponents = [...beforeJson, ...afterJson].filter(
    (element): element is PcbComponent =>
      element.type === "pcb_component" &&
      sourceComponentIds.has(element.source_component_id),
  )
  if (focusedComponents.length === 0) {
    throw new Error("No changed or errored PCB components found")
  }

  const bounds = focusedComponents.map(getComponentBounds)
  const viewport = {
    minX: Math.min(...bounds.map((bound) => bound.minX)) - 4,
    minY: Math.min(...bounds.map((bound) => bound.minY)) - 4,
    maxX: Math.max(...bounds.map((bound) => bound.maxX)) + 4,
    maxY: Math.max(...bounds.map((bound) => bound.maxY)) + 4,
  }
  const targetAspectRatio = 900 / 560
  const width = viewport.maxX - viewport.minX
  const height = viewport.maxY - viewport.minY
  if (width / height < targetAspectRatio) {
    const extraWidth = height * targetAspectRatio - width
    viewport.minX -= extraWidth / 2
    viewport.maxX += extraWidth / 2
  } else {
    const extraHeight = width / targetAspectRatio - height
    viewport.minY -= extraHeight / 2
    viewport.maxY += extraHeight / 2
  }
  return viewport
}

const createSnapshotSvg = (
  circuitJson: AnyCircuitElement[],
  blockingErrors: AnyCircuitElement[],
  viewport: Bounds,
): string => {
  const jsonWithOfficialErrors = [
    ...circuitJson.filter((element) => !element.type.endsWith("_error")),
    ...blockingErrors,
  ]
  return convertCircuitJsonToPcbSvg(jsonWithOfficialErrors, {
    width: 900,
    height: 560,
    viewport,
    shouldDrawErrors: true,
    showErrorsInTextOverlay: false,
    backgroundColor: "#0d1117",
    drawPaddingOutsideBoard: false,
    includeVersion: true,
  })
}

const main = async (): Promise<void> => {
  const beforeRoot = process.argv[2]
  const outputDirectory = resolve(
    process.argv[3] ?? "docs/placement-validation",
  )
  if (!beforeRoot) {
    throw new Error(
      "Usage: bun scripts/generate-placement-validation-snapshots.ts <before-root> [output-directory]",
    )
  }

  process.env.TSCIRCUIT_DATASET_DISABLE_AUTOROUTER = "true"
  await mkdir(outputDirectory, { recursive: true })
  for (const circuitNumber of circuitNumbers) {
    const [beforeJson, afterJson] = await Promise.all([
      renderCircuit(resolve(beforeRoot), circuitNumber),
      renderCircuit(process.cwd(), circuitNumber),
    ])
    const [beforeErrors, afterErrors] = await Promise.all([
      runAllPlacementChecks(beforeJson),
      runAllPlacementChecks(afterJson),
    ])
    const blockingBeforeErrors = beforeErrors.filter((error) =>
      blockingErrorTypes.has(error.type),
    )
    const blockingAfterErrors = afterErrors.filter((error) =>
      blockingErrorTypes.has(error.type),
    )
    if (blockingAfterErrors.length > 0) {
      throw new Error(
        `Circuit ${circuitNumber} still has blocking placement errors: ${blockingAfterErrors.map((error) => error.message).join("; ")}`,
      )
    }

    const focusedSourceIds = getChangedSourceComponentIds(beforeJson, afterJson)
    for (const sourceId of getErrorSourceComponentIds(
      beforeJson,
      blockingBeforeErrors,
    )) {
      focusedSourceIds.add(sourceId)
    }
    const viewport = getViewport(beforeJson, afterJson, focusedSourceIds)
    const filePrefix = resolve(outputDirectory, `circuit${circuitNumber}`)
    await Promise.all([
      writeFile(
        `${filePrefix}-before.svg`,
        createSnapshotSvg(beforeJson, blockingBeforeErrors, viewport),
      ),
      writeFile(
        `${filePrefix}-after.svg`,
        createSnapshotSvg(afterJson, blockingAfterErrors, viewport),
      ),
    ])
    console.log(
      `Rendered circuit ${circuitNumber}: ${blockingBeforeErrors.length} before error(s), 0 after`,
    )
  }
}

void main()

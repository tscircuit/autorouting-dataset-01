import { mkdir } from "node:fs/promises"
import path from "node:path"
import { mulberry32 } from "lib/maths/random/mulberry32"
import { pick } from "lib/maths/random/pick"
import { pickWeighted } from "lib/maths/random/pickWeighted"
import { randInt } from "lib/maths/random/randInt"
import { buildConnections } from "scripts/random-circuits/buildConnections"
import { footprintSizes } from "scripts/random-circuits/footprintSizes"
import { footprints } from "scripts/random-circuits/footprints"
import { generateCircuitFile } from "scripts/random-circuits/generateCircuitFile"
import { getPinInfo } from "scripts/random-circuits/get-pin-counts"
import { placeComponentsDeterministically } from "scripts/random-circuits/placeComponentsDeterministically"
import type { ComponentSpecification } from "types/ComponentSpecification"
import type { ComponentType } from "types/ComponentType"
import type { GenerationContext } from "types/GenerationContext"

const MAX_PLACEMENT_ITERATIONS = 50
const MAX_REGENERATION_ATTEMPTS = 50

const createPlacementMargin = (rng: () => number, ctx: GenerationContext) => ({
  left: randInt({
    rng,
    min: ctx.configuration.minRandomMarginBetweenParts,
    max: ctx.configuration.maxRandomMarginBetweenParts + 1,
  }),
  right: randInt({
    rng,
    min: ctx.configuration.minRandomMarginBetweenParts,
    max: ctx.configuration.maxRandomMarginBetweenParts + 1,
  }),
  top: randInt({
    rng,
    min: ctx.configuration.minRandomMarginBetweenParts,
    max: ctx.configuration.maxRandomMarginBetweenParts + 1,
  }),
  bottom: randInt({
    rng,
    min: ctx.configuration.minRandomMarginBetweenParts,
    max: ctx.configuration.maxRandomMarginBetweenParts + 1,
  }),
})

const createRandomCircuitSpec = (
  rng: () => number,
  ctx: GenerationContext,
): {
  boardSize: { width: number; height: number }
  components: ComponentSpecification[]
} => {
  const partsCount = randInt({
    rng,
    min: ctx.configuration.minParts,
    max: ctx.configuration.maxParts + 1,
  })

  const components: ComponentSpecification[] = []
  const typeCounts: Record<ComponentType, number> = {
    resistor: 0,
    capacitor: 0,
    inductor: 0,
    diode: 0,
    transistor: 0,
    chip: 0,
    pinhead: 0,
  }
  const innerPadding = Math.max(
    2,
    ctx.configuration.maxGapBetweenParts,
    ctx.configuration.maxRandomMarginBetweenParts,
  )

  // Non-orthogonal rotations can produce self-overlapping pad obstacles in the
  // generated SRJ, so keep random placements aligned to right angles.
  const rotationAngles = [0, 90, 180, 270]
  const rotationWeights = [0.6, 0.25, 0.1, 0.05]
  const layers = ["top", "bottom"] as const
  const layerWeights = [0.8, 0.2]
  const transistorTypes = ["npn", "pnp", "bjt", "jfet", "mosfet"] as const

  for (let p = 0; p < partsCount; p++) {
    const componentType = pick({
      rng,
      items: [
        "resistor",
        "capacitor",
        "inductor",
        "diode",
        "transistor",
        "chip",
        "pinhead",
      ] as const,
    })
    typeCounts[componentType] += 1
    const componentName = `${componentType}-${typeCounts[componentType]}`
    const footprint = pick({ rng, items: footprints[componentType] })
    const size = footprintSizes[footprint]
    const pinInfo = getPinInfo(componentType, footprint)
    const pcbRotation = pickWeighted({
      rng,
      items: rotationAngles,
      weights: rotationWeights,
    })
    const layer = pickWeighted({ rng, items: layers, weights: layerWeights })
    const placementMargin = createPlacementMargin(rng, ctx)
    components.push({
      type: componentType,
      name: componentName,
      footprint: footprint,
      pinCount: pinInfo.pinCount,
      pinNames: pinInfo.pinNames,
      pcbX: 0,
      pcbY: 0,
      pcbRotation,
      layer,
      width: size.width,
      height: size.height,
      placementMargin,
      connections: {},
      transistorType:
        componentType === "transistor"
          ? pick({ rng, items: transistorTypes })
          : undefined,
    })
  }

  const estimatedArea = components.reduce((sum, component) => {
    const cellWidth =
      component.width +
      (component.placementMargin.left + component.placementMargin.right) *
        1.25 +
      ctx.configuration.maxGapBetweenParts
    const cellHeight =
      component.height +
      (component.placementMargin.top + component.placementMargin.bottom) *
        1.25 +
      ctx.configuration.maxGapBetweenParts
    return sum + cellWidth * cellHeight
  }, 0)
  const aspectRatio = 0.85 + rng() * 0.5
  const estimatedWidth = Math.sqrt(estimatedArea * aspectRatio)
  const estimatedHeight = Math.sqrt(estimatedArea / aspectRatio)
  const boardSize = {
    width: Number((estimatedWidth + innerPadding * 2).toFixed(2)),
    height: Number((estimatedHeight + innerPadding * 2).toFixed(2)),
  }

  return { boardSize, components }
}

/**
 * Orchestrates the creation of a dataset of random circuit designs.
 */
export const generateRandomDataset = async (
  ctx: GenerationContext,
): Promise<void> => {
  if (
    ctx.configuration.layerCount !== 2 &&
    ctx.configuration.layerCount !== 4
  ) {
    throw new Error(
      `random circuit generation only supports 2-layer or 4-layer boards; received ${ctx.configuration.layerCount}`,
    )
  }

  const libDirectory = path.resolve("lib", "circuit")
  await mkdir(libDirectory, { recursive: true })

  for (
    let circuitOffset = 0;
    circuitOffset < ctx.configuration.count;
    circuitOffset++
  ) {
    let placedComponents: ComponentSpecification[] | null = null
    let boardSize: { width: number; height: number } | null = null

    for (let attempt = 0; attempt < MAX_REGENERATION_ATTEMPTS; attempt++) {
      const rng = mulberry32(
        ctx.configuration.seed + circuitOffset * 997 + attempt * 7919,
      )
      const candidate = createRandomCircuitSpec(rng, ctx)
      const placedCandidate = placeComponentsDeterministically(
        {
          rng,
          components: candidate.components,
          boardSize: candidate.boardSize,
          maxIterations: MAX_PLACEMENT_ITERATIONS,
        },
        ctx,
      )

      if (placedCandidate === null) {
        continue
      }

      placedComponents = placedCandidate
      boardSize = candidate.boardSize
      break
    }

    if (placedComponents === null || boardSize === null) {
      console.warn(
        `Skipping circuit ${
          ctx.configuration.allowedStartIndex + circuitOffset
        } after ${MAX_REGENERATION_ATTEMPTS} failed placement attempts`,
      )
      continue
    }

    buildConnections(
      mulberry32(ctx.configuration.seed + circuitOffset * 1597),
      placedComponents,
    )
    await generateCircuitFile({
      libDirectory,
      allowedStartIndex: ctx.configuration.allowedStartIndex,
      circuitOffset,
      components: placedComponents,
      boardSize,
      layerCount: ctx.configuration.layerCount,
      tscircuitConfig: ctx.configuration.tscircuitConfig,
      rootPath: ctx.configuration.rootPath,
    })
  }
}

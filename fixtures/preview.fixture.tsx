import {
  type GraphicsObject,
  getSvgFromGraphicsObject,
  type Line,
  type Rect,
} from "graphics-debug"
import { useMemo, useState } from "react"
import type { SimpleRouteJson } from "tscircuit"

// @ts-expect-error
const srjModules = import.meta.glob("../lib/dataset/*.simple-route.json", {
  eager: true,
  import: "default",
}) as Record<string, SimpleRouteJson>

const getCircuitFilePath = (circuitId: number) =>
  `../lib/dataset/circuit${String(circuitId).padStart(3, "0")}.simple-route.json`

const validCircuitIds = Object.keys(srjModules)
  .map((filePath) => filePath.match(/circuit(\d+)\.simple-route\.json$/)?.[1])
  .filter((value): value is string => value !== undefined)
  .map((value) => Number(value))
  .sort((a, b) => a - b)

const maxCircuitId = validCircuitIds.at(-1) ?? 0

const findNearestValidCircuitId = (
  requestedCircuitId: number,
  previousCircuitId: number,
) => {
  if (requestedCircuitId <= 0) {
    return 0
  }

  if (srjModules[getCircuitFilePath(requestedCircuitId)]) {
    return requestedCircuitId
  }

  const direction = requestedCircuitId >= previousCircuitId ? 1 : -1

  if (direction > 0) {
    const nextValidCircuitId = validCircuitIds.find(
      (circuitId) => circuitId >= requestedCircuitId,
    )
    return nextValidCircuitId ?? previousCircuitId
  }

  for (let index = validCircuitIds.length - 1; index >= 0; index -= 1) {
    const candidateCircuitId = validCircuitIds[index]
    if (candidateCircuitId <= requestedCircuitId) {
      return candidateCircuitId
    }
  }

  return 0
}

const hashString = (value: string) => {
  let hash = 2166136261

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }

  return hash >>> 0
}

const getNetColor = (netName: string) => {
  const hash = hashString(netName)
  const blockedHueRanges = [
    [0, 20],
    [220, 260],
    [275, 315],
  ] as const
  const allowedHueRanges = [
    [21, 219],
    [261, 274],
    [316, 359],
  ] as const
  const totalAllowedHueCount = allowedHueRanges.reduce(
    (sum, [start, end]) => sum + (end - start + 1),
    0,
  )

  let hueOffset = hash % totalAllowedHueCount
  let hue: number = allowedHueRanges[0][0]
  for (const [start, end] of allowedHueRanges) {
    const rangeSize = end - start + 1
    if (hueOffset < rangeSize) {
      hue = start + hueOffset
      break
    }
    hueOffset -= rangeSize
  }

  if (blockedHueRanges.some(([start, end]) => hue >= start && hue <= end)) {
    hue = 140
  }

  const saturation = 62 + (hash % 18)
  const lightness = 42 + ((hash >>> 8) % 12)

  return `hsl(${hue} ${saturation}% ${lightness}%)`
}

const getGraphicsFromSrj = (srj: SimpleRouteJson): GraphicsObject => {
  const topAndBottomRects =
    srj.obstacles
      .filter(
        (obstacle) =>
          obstacle.layers.includes("top") && obstacle.layers.includes("bottom"),
      )
      .map((obstacle, _index) => ({
        center: obstacle.center,
        width: obstacle.width ?? 0,
        height: obstacle.height ?? 0,
        fill: "rgba(128, 0, 128, 0.18)",
      })) ?? []

  const topOnlyRects =
    srj.obstacles
      .filter(
        (obstacle) =>
          obstacle.layers.includes("top") &&
          !obstacle.layers.includes("bottom"),
      )
      .map((obstacle, _index) => ({
        center: obstacle.center,
        width: obstacle.width ?? 0,
        height: obstacle.height ?? 0,
        fill: "red",
      })) ?? []

  const bottomOnlyRects =
    srj.obstacles
      .filter(
        (obstacle) =>
          obstacle.layers.includes("bottom") &&
          !obstacle.layers.includes("top"),
      )
      .map((obstacle, _index) => ({
        center: obstacle.center,
        width: obstacle.width ?? 0,
        height: obstacle.height ?? 0,
        fill: "blue",
      })) ?? []

  const lines: Line[] =
    srj.connections?.flatMap((connection) => {
      const netColor = getNetColor(connection.name)
      const line: Line = {
        points: connection.pointsToConnect.map((point) => ({
          x: point.x,
          y: point.y,
        })),
        strokeColor: netColor,
        label: connection.name,
      }
      return line
    }) ?? []

  const points =
    srj.connections?.flatMap((connection) =>
      connection.pointsToConnect.map((point) => ({
        x: point.x,
        y: point.y,
        color: getNetColor(connection.name),
        label: point.pointId ?? connection.name,
      })),
    ) ?? []

  const broadBound: Rect = {
    center: {
      x: srj.bounds.minX + (srj.bounds.maxX - srj.bounds.minX) / 2,
      y: srj.bounds.minY + (srj.bounds.maxY - srj.bounds.minY) / 2,
    },
    width: srj.bounds.maxX - srj.bounds.minX,
    height: srj.bounds.maxY - srj.bounds.minY,
  }

  return {
    rects: [
      broadBound,
      topAndBottomRects,
      topOnlyRects,
      bottomOnlyRects,
    ].flat(),
    lines,
    points,
  }
}

export default function PreviewFixture() {
  const [circuitId, setCircuitId] = useState(1)

  const selectedPath = getCircuitFilePath(circuitId)
  const srj = srjModules[selectedPath]

  const svg = useMemo(() => {
    if (!srj) return null
    return getSvgFromGraphicsObject(getGraphicsFromSrj(srj))
  }, [srj])

  return (
    <div className="grid gap-3">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <label className="flex flex-row items-center gap-1.5">
          <span>Circuit ID</span>
          <input
            className="rounded border border-zinc-300 px-2 py-1"
            type="number"
            min={0}
            max={maxCircuitId}
            step={1}
            value={circuitId}
            onChange={(event) => {
              const nextValue = Number(event.target.value)
              if (!Number.isFinite(nextValue)) {
                return
              }

              setCircuitId(
                findNearestValidCircuitId(
                  Math.max(0, Math.trunc(nextValue)),
                  circuitId,
                ),
              )
            }}
          />
        </label>

        <a
          style={{ marginLeft: "auto", display: "inline-flex" }}
          href="https://github.com/tscircuit/autorouting-dataset-01"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub repository"
        >
          <img
            alt="GitHub"
            src="https://img.shields.io/badge/GitHub-tscircuit%2Fautorouting--dataset--01-181717?logo=github"
          />
        </a>
      </div>

      {svg ? (
        <div
          className="overflow-auto border border-zinc-300 bg-white p-3"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: fixture preview renders trusted generated SVG output.
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      ) : (
        <div>Missing SRJ for circuit {String(circuitId).padStart(3, "0")}.</div>
      )}
    </div>
  )
}

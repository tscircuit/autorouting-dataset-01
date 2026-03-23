import { type GraphicsObject, getSvgFromGraphicsObject } from "graphics-debug"
import { useMemo, useState } from "react"
import type { SimpleRouteJson } from "tscircuit"

// @ts-ignore
const srjModules = import.meta.glob("../lib/dataset/*.simple-route.json", {
  eager: true,
  import: "default",
}) as Record<string, SimpleRouteJson>

const getCircuitFilePath = (circuitId: number) =>
  `../lib/dataset/circuit${String(circuitId).padStart(3, "0")}.simple-route.json`

const getGraphicsFromSrj = (srj: SimpleRouteJson): GraphicsObject => {
  const rects =
    srj.obstacles.map((obstacle, index) => ({
      center: obstacle.center,
      width: obstacle.width ?? 0,
      height: obstacle.height ?? 0,
      fill: "rgba(220, 38, 38, 0.18)",
      stroke: "#dc2626",
      label: obstacle.connectedTo?.[0] ?? `obstacle-${index + 1}`,
    })) ?? []

  const points =
    srj.connections?.flatMap((connection) =>
      connection.pointsToConnect.map((point) => ({
        x: point.x,
        y: point.y,
        color: "#2563eb",
        label: point.pointId ?? connection.name,
      })),
    ) ?? []

  return {
    rects,
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
      <label className="flex flex-row items-center gap-1.5">
        <span>Circuit ID</span>
        <input
          className="rounded border border-zinc-300 px-2 py-1"
          type="number"
          min={1}
          max={999}
          step={1}
          value={circuitId}
          onChange={(event) => {
            const nextValue = Number(event.target.value)
            if (Number.isFinite(nextValue)) {
              setCircuitId(nextValue)
            }
          }}
        />
      </label>

      {svg ? (
        <div
          className="overflow-auto border border-zinc-300 bg-white p-3"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      ) : (
        <div>Missing SRJ for circuit {String(circuitId).padStart(3, "0")}.</div>
      )}
    </div>
  )
}

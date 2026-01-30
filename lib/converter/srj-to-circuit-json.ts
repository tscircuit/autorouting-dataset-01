import type {
  AnyCircuitElement,
  LayerRef,
  PcbBoard,
  PCBKeepout,
  PcbPort,
  PcbSmtPad,
  PcbTrace,
  PcbTraceRoutePoint,
  SourcePort,
  SourceTrace,
} from "circuit-json"
import type { SimpleRouteJson } from "tscircuit"

/**
 * Convert a SimpleRouteJson into Circuit JSON for DRC use.
 */
export const convertToCircuteJson = (
  srj: SimpleRouteJson,
): AnyCircuitElement[] => {
  const circuitJson: AnyCircuitElement[] = []
  const pcb_board_id = "pcb_board_0"
  const boundsWidth = srj.bounds.maxX - srj.bounds.minX
  const boundsHeight = srj.bounds.maxY - srj.bounds.minY
  const boardCenterX = (srj.bounds.minX + srj.bounds.maxX) / 2
  const boardCenterY = (srj.bounds.minY + srj.bounds.maxY) / 2
  const boardShape = srj.outline ? "polygon" : "rect"
  const pcb_board: PcbBoard = {
    type: "pcb_board",
    pcb_board_id,
    center: { x: boardCenterX, y: boardCenterY },
    width: boundsWidth,
    height: boundsHeight,
    thickness: 1.6,
    num_layers: srj.layerCount,
    shape: boardShape,
    outline: srj.outline,
    material: "fr4",
  }

  circuitJson.push(pcb_board)

  const pcbPortIds = new Set<string>()
  const sourceTraceIds = new Set<string>()

  for (const connection of srj.connections) {
    const source_component_id = `source_component_${connection.name}`
    const source_trace_id = connection.name
    const connected_source_port_ids: string[] = []
    for (
      let pointIndex = 0;
      pointIndex < connection.pointsToConnect.length;
      pointIndex += 1
    ) {
      const point = connection.pointsToConnect[pointIndex]
      const pcb_port_id =
        point.pcb_port_id ?? `pcb_port_${connection.name}_${pointIndex}`
      const source_port_id = `source_port_${pcb_port_id}`
      connected_source_port_ids.push(source_port_id)
      if (!pcbPortIds.has(pcb_port_id)) {
        const source_port: SourcePort = {
          type: "source_port",
          name: source_port_id,
          source_port_id,
          source_component_id,
        }
        const pcb_port: PcbPort = {
          type: "pcb_port",
          pcb_port_id,
          source_port_id,
          x: point.x,
          y: point.y,
          layers: [point.layer as LayerRef],
        }
        pcbPortIds.add(pcb_port_id)
        circuitJson.push(source_port, pcb_port)
      }
    }
    if (!sourceTraceIds.has(source_trace_id)) {
      const source_trace: SourceTrace = {
        type: "source_trace",
        source_trace_id,
        connected_source_port_ids,
        connected_source_net_ids: [],
      }
      sourceTraceIds.add(source_trace_id)
      circuitJson.push(source_trace)
    }
  }

  for (
    let obstacleIndex = 0;
    obstacleIndex < srj.obstacles.length;
    obstacleIndex += 1
  ) {
    const obstacle = srj.obstacles[obstacleIndex]
    const obstacleType = obstacle.type as "rect" | "oval"
    const obstacleLayer = obstacle.layers[0] as LayerRef
    if (!obstacleLayer) {
      continue
    }
    if (obstacle.connectedTo.length === 0) {
      const pcb_keepout_id = `pcb_keepout_${obstacleIndex}`
      const pcb_keepout: PCBKeepout =
        obstacleType === "oval"
          ? {
              type: "pcb_keepout",
              layers: obstacle.layers as LayerRef[],
              shape: "circle",
              center: { x: obstacle.center.x, y: obstacle.center.y },
              pcb_keepout_id,
              radius: Math.min(obstacle.width, obstacle.height) / 2,
            }
          : {
              type: "pcb_keepout",
              layers: obstacle.layers as LayerRef[],
              shape: "rect",
              center: { x: obstacle.center.x, y: obstacle.center.y },
              pcb_keepout_id,
              width: obstacle.width,
              height: obstacle.height,
            }
      circuitJson.push(pcb_keepout)
      continue
    }
    const pcb_smtpad_id = `pcb_smtpad_${obstacleIndex}`
    const pcb_port_id = obstacle.connectedTo.find((id) =>
      id.startsWith("pcb_port_"),
    )
    const pcb_smtpad: PcbSmtPad =
      obstacleType === "oval"
        ? {
            type: "pcb_smtpad",
            shape: "circle",
            pcb_smtpad_id,
            x: obstacle.center.x,
            y: obstacle.center.y,
            radius: Math.min(obstacle.width, obstacle.height) / 2,
            layer: obstacleLayer,
            pcb_port_id,
          }
        : {
            type: "pcb_smtpad",
            shape: "rect",
            pcb_smtpad_id,
            x: obstacle.center.x,
            y: obstacle.center.y,
            width: obstacle.width,
            height: obstacle.height,
            layer: obstacleLayer,
            pcb_port_id,
          }
    circuitJson.push(pcb_smtpad)
  }

  const traces = srj.traces ?? []
  const connectionNames = new Set(
    srj.connections.map((connection) => connection.name),
  )

  for (let traceIndex = 0; traceIndex < traces.length; traceIndex += 1) {
    const trace = traces[traceIndex]
    const pcbTraceId = trace.pcb_trace_id ?? `pcb_trace_${traceIndex}`
    const route = trace.route.map((routePoint): PcbTraceRoutePoint => {
      switch (routePoint.route_type) {
        case "wire":
          return {
            route_type: "wire",
            x: routePoint.x,
            y: routePoint.y,
            width: routePoint.width,
            layer: routePoint.layer as LayerRef,
          }
        case "via":
          return {
            route_type: "via",
            x: routePoint.x,
            y: routePoint.y,
            to_layer: routePoint.to_layer as LayerRef,
            from_layer: routePoint.from_layer as LayerRef,
          }
        default:
          throw new Error(
            `Unsupported route_type in SimpleRouteJson: "${routePoint.route_type}"`,
          )
      }
    })

    const pcb_trace: PcbTrace = {
      type: "pcb_trace",
      pcb_trace_id: pcbTraceId,
      source_trace_id:
        trace.connection_name && connectionNames.has(trace.connection_name)
          ? trace.connection_name
          : undefined,
      route,
    }

    circuitJson.push(pcb_trace)
  }

  return circuitJson
}

import type {
  AnyCircuitElement,
  LayerRef,
  PCBKeepout,
  PcbBoard,
  PcbPort,
  PcbSmtPad,
  PcbTrace,
  PcbTraceRoutePoint,
  PcbVia,
  SourceTrace,
} from "circuit-json"
import type { SimpleRouteJson, SimplifiedPcbTrace } from "tscircuit"

/**
 * Convert a SimpleRouteJson and its routed traces into Circuit JSON for DRC use.
 */
export const convertToCircuteJson = (inputs: {
  srjWithPointPairs: SimpleRouteJson
  routes: SimplifiedPcbTrace[]
  minTraceWidth?: number
  minViaDiameter?: number
}): AnyCircuitElement[] => {
  const { srjWithPointPairs, routes } = inputs
  const minTraceWidth = inputs.minTraceWidth ?? 0.1
  const minViaDiameter = inputs.minViaDiameter ?? 0.6
  const circuitJson: AnyCircuitElement[] = []
  const pcb_board_id = "pcb_board_0"
  const boundsWidth =
    srjWithPointPairs.bounds.maxX - srjWithPointPairs.bounds.minX
  const boundsHeight =
    srjWithPointPairs.bounds.maxY - srjWithPointPairs.bounds.minY
  const boardCenterX =
    (srjWithPointPairs.bounds.minX + srjWithPointPairs.bounds.maxX) / 2
  const boardCenterY =
    (srjWithPointPairs.bounds.minY + srjWithPointPairs.bounds.maxY) / 2
  const boardShape = srjWithPointPairs.outline ? "polygon" : "rect"
  const pcb_board: PcbBoard = {
    type: "pcb_board",
    pcb_board_id,
    center: { x: boardCenterX, y: boardCenterY },
    width: boundsWidth,
    height: boundsHeight,
    thickness: 1.6,
    num_layers: srjWithPointPairs.layerCount,
    shape: boardShape,
    outline: srjWithPointPairs.outline,
    material: "fr4",
  }

  circuitJson.push(pcb_board)

  const connectionNameByConnectionName = new Map<string, string>()
  for (const connection of srjWithPointPairs.connections) {
    const connectionFields = connection as {
      netConnectionName?: string
      rootConnectionName?: string
    }
    const connectionName =
      connectionFields.netConnectionName ??
      connectionFields.rootConnectionName ??
      connection.name
    connectionNameByConnectionName.set(connection.name, connectionName)
  }

  const pcbPortByPcbPortId = new Map<string, PcbPort>()
  const sourceTraceBySourceTraceId = new Map<string, SourceTrace>()

  for (const connection of srjWithPointPairs.connections) {
    const connectionName =
      connectionNameByConnectionName.get(connection.name) ?? connection.name
    const connectedSourcePortIdList: string[] = []
    for (
      let pointIndex = 0;
      pointIndex < connection.pointsToConnect.length;
      pointIndex += 1
    ) {
      const point = connection.pointsToConnect[pointIndex]
      const pcb_port_id =
        point.pcb_port_id ?? `pcb_port_${connection.name}_${pointIndex}`
      connectedSourcePortIdList.push(pcb_port_id)
      if (!pcbPortByPcbPortId.has(pcb_port_id)) {
        const pointLayers = Array.isArray(
          (point as { layers?: unknown }).layers,
        )
          ? ((point as { layers?: LayerRef[] }).layers ?? [])
          : point.layer
            ? [point.layer as LayerRef]
            : []
        const pcb_port: PcbPort = {
          type: "pcb_port",
          pcb_port_id,
          source_port_id: pcb_port_id,
          x: point.x,
          y: point.y,
          layers: pointLayers,
        }
        pcbPortByPcbPortId.set(pcb_port_id, pcb_port)
      }
    }

    const existingSourceTrace = sourceTraceBySourceTraceId.get(connectionName)
    if (existingSourceTrace) {
      existingSourceTrace.connected_source_port_ids = Array.from(
        new Set([
          ...existingSourceTrace.connected_source_port_ids,
          ...connectedSourcePortIdList,
        ]),
      )
      continue
    }

    sourceTraceBySourceTraceId.set(connectionName, {
      type: "source_trace",
      source_trace_id: connectionName,
      connected_source_port_ids: connectedSourcePortIdList,
      connected_source_net_ids: [],
    })
  }

  circuitJson.push(
    ...Array.from(sourceTraceBySourceTraceId.values()),
    ...Array.from(pcbPortByPcbPortId.values()),
  )

  for (
    let obstacleIndex = 0;
    obstacleIndex < srjWithPointPairs.obstacles.length;
    obstacleIndex += 1
  ) {
    const obstacle = srjWithPointPairs.obstacles[obstacleIndex]
    const obstacleType = obstacle.type as "rect" | "oval"
    const obstacleLayer = obstacle.layers?.[0] as LayerRef | undefined
    if (!obstacleLayer) {
      continue
    }
    const connectedTo = obstacle.connectedTo ?? []
    if (connectedTo.length === 0) {
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
    const pcb_port_id = connectedTo.find((id) => id.startsWith("pcb_port_"))
    const pcb_smtpad_hint_id = connectedTo.find((id) =>
      id.startsWith("pcb_smtpad_"),
    )
    if (!pcb_port_id && !pcb_smtpad_hint_id) {
      continue
    }
    const pcb_smtpad_id = pcb_smtpad_hint_id ?? `pcb_smtpad_${obstacleIndex}`
    const centerX = obstacle.center?.x
    const centerY = obstacle.center?.y
    if (typeof centerX !== "number" || typeof centerY !== "number") {
      continue
    }
    const pcb_smtpad: PcbSmtPad =
      obstacleType === "oval"
        ? {
            type: "pcb_smtpad",
            shape: "circle",
            pcb_smtpad_id,
            x: centerX,
            y: centerY,
            radius: Math.min(obstacle.width, obstacle.height) / 2,
            layer: obstacleLayer,
            pcb_port_id,
          }
        : {
            type: "pcb_smtpad",
            shape: "rect",
            pcb_smtpad_id,
            x: centerX,
            y: centerY,
            width: obstacle.width,
            height: obstacle.height,
            layer: obstacleLayer,
            pcb_port_id,
          }
    circuitJson.push(pcb_smtpad)
  }

  const viaKeySet = new Set<string>()
  const pcbViaList: PcbVia[] = []
  for (let traceIndex = 0; traceIndex < routes.length; traceIndex += 1) {
    const trace = routes[traceIndex]
    const pcbTraceId = trace.pcb_trace_id ?? `pcb_trace_${traceIndex}`
    for (const routePoint of trace.route) {
      if (routePoint.route_type !== "via") {
        continue
      }
      const fromLayer = routePoint.from_layer as LayerRef
      const toLayer = routePoint.to_layer as LayerRef
      const viaKey = `${routePoint.x}_${routePoint.y}_${fromLayer}_${toLayer}`
      if (viaKeySet.has(viaKey)) {
        continue
      }
      viaKeySet.add(viaKey)
      pcbViaList.push({
        type: "pcb_via",
        pcb_via_id: `pcb_via_${pcbViaList.length}`,
        pcb_trace_id: pcbTraceId,
        x: routePoint.x,
        y: routePoint.y,
        outer_diameter: minViaDiameter,
        hole_diameter: minViaDiameter * 0.5,
        layers: [fromLayer, toLayer],
      })
    }
  }

  circuitJson.push(...pcbViaList)

  for (let traceIndex = 0; traceIndex < routes.length; traceIndex += 1) {
    const trace = routes[traceIndex]
    const pcbTraceId = trace.pcb_trace_id ?? `pcb_trace_${traceIndex}`
    const traceConnectionName =
      (trace as { connection_name?: string }).connection_name ??
      (trace as { connectionName?: string }).connectionName
    const sourceTraceId = traceConnectionName
      ? (connectionNameByConnectionName.get(traceConnectionName) ??
        traceConnectionName)
      : undefined
    const route = trace.route
      .map((routePoint): PcbTraceRoutePoint | null => {
        if (routePoint.route_type === "wire") {
          return {
            route_type: "wire",
            x: routePoint.x,
            y: routePoint.y,
            width: routePoint.width ?? minTraceWidth,
            layer: routePoint.layer as LayerRef,
            start_pcb_port_id: (routePoint as { start_pcb_port_id?: string })
              .start_pcb_port_id,
            end_pcb_port_id: (routePoint as { end_pcb_port_id?: string })
              .end_pcb_port_id,
          }
        }
        if (routePoint.route_type === "via") {
          return {
            route_type: "via",
            x: routePoint.x,
            y: routePoint.y,
            to_layer: routePoint.to_layer as LayerRef,
            from_layer: routePoint.from_layer as LayerRef,
          }
        }
        return null
      })
      .filter(
        (routePoint): routePoint is PcbTraceRoutePoint => routePoint !== null,
      )

    const pcb_trace: PcbTrace = {
      type: "pcb_trace",
      pcb_trace_id: pcbTraceId,
      source_trace_id: sourceTraceId,
      route,
    }

    circuitJson.push(pcb_trace)
  }

  return circuitJson
}

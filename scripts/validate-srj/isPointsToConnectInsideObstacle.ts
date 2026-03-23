import { getBoundFromCenteredRect } from "@tscircuit/math-utils"
import { mapLayerNameToZ } from "lib/layer/mapLayerNameToZ"
import type { Obstacle, SimpleRouteConnection } from "tscircuit"

export const isPointsToConnectInsideObstacle = (
  obstacles: Obstacle[],
  pointsToConnect: SimpleRouteConnection["pointsToConnect"],
  layerCount: number,
): boolean => {
  for (const point of pointsToConnect) {
    const insideObstacle = obstacles.some((obstacle) => {
      const layersOfObstacle = obstacle.layers.map((layer) =>
        mapLayerNameToZ(layer, layerCount),
      )
      const layerOfPoints = mapLayerNameToZ(point.layer, layerCount)
      const doseSharedLayers = layersOfObstacle.includes(layerOfPoints)
      if (!doseSharedLayers) return false
      const { minX, minY, maxX, maxY } = getBoundFromCenteredRect(obstacle)
      return (
        point.x >= minX && point.x <= maxX && point.y >= minY && point.y <= maxY
      )
    })
    if (!insideObstacle) {
      return false
    }
  }
  return true
}

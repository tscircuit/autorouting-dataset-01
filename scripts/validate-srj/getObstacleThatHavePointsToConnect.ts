import { Obstacle, SimpleRouteJson } from "tscircuit"
import { centerSizeToBounds, isPointInsideBounds } from "lib/maths/box"

/** Returns obstacles containing at least one connection point. */
export const getObstacleThatHavePointsToConnect = (
  obstacle: Obstacle[],
  pointToConnect: SimpleRouteJson["connections"][number]["pointsToConnect"],
): Obstacle[] => {
  return obstacle.filter((obstacle) => {
    const obstacleBounds = centerSizeToBounds(obstacle.center, obstacle)
    return pointToConnect.some((point) => {
      return isPointInsideBounds(point, obstacleBounds)
    })
  })
}

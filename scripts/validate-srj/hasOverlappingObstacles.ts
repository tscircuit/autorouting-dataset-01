import { Obstacle } from "tscircuit"
import {
  boundsAreaOverlap,
  centerSizeToBounds,
  doBoundsOverlap,
} from "lib/maths/box"
import { obstacleShareLayers } from "./obstacleShareLayers"

/** Finds overlapping obstacles on shared layers and reports the first conflict. */
export const hasOverlappingObstacles = (
  obstacles: Obstacle[],
  layerCount: number,
): {
  ok: boolean
  which: string
} => {
  const bounds = obstacles.map((obstacle) =>
    centerSizeToBounds(obstacle.center, obstacle),
  )
  for (let i = 0; i < bounds.length - 1; i++) {
    for (let j = i + 1; j < bounds.length; j++) {
      if (
        doBoundsOverlap(bounds[i], bounds[j]) &&
        obstacleShareLayers(obstacles[i], obstacles[j], layerCount)
      ) {
        const areaOverlap = boundsAreaOverlap(bounds[i], bounds[j])

        if (areaOverlap < 0.1) {
          continue
        }
        return {
          ok: false,
          which: [
            `obstacles1 at center: x:${obstacles[i].center.x} y:${obstacles[i].center.y} size: w:${obstacles[i].width} h:${obstacles[i].height}`,
            `obstacles2 at center: x:${obstacles[j].center.x} y:${obstacles[j].center.y} size: w:${obstacles[j].width} h:${obstacles[j].height}`,
          ].join(" and "),
        }
      }
    }
  }
  return { ok: true, which: "" }
}

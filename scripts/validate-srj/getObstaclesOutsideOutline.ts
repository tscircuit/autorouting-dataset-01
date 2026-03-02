import { type Bounds, getBoundFromCenteredRect } from "lib/maths/box"
import type { Obstacle } from "tscircuit"

/**
 * Returns obstacles whose full bounds are not fully contained in board bounds.
 */
export const getObstaclesOutsideOutline = (
  obstacles: Obstacle[],
  outlineBounds: Bounds | undefined,
): Obstacle[] => {
  if (!outlineBounds) {
    return []
  }

  return obstacles.filter((obstacle) => {
    const bounds = getBoundFromCenteredRect(obstacle)
    return (
      bounds.minX < outlineBounds.minX ||
      bounds.maxX > outlineBounds.maxX ||
      bounds.minY < outlineBounds.minY ||
      bounds.maxY > outlineBounds.maxY
    )
  })
}

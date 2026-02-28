import {
  type Bounds,
  doBoundsOverlap,
  getBoundFromCenteredRect,
} from "lib/maths/box"
import type { Obstacle } from "tscircuit"

/** Verifies every obstacle overlaps with the board outline bounds. */
export const allAreWithInOutline = (
  obstacles: Obstacle[],
  outlineBounds: Bounds | undefined,
): boolean => {
  if (!outlineBounds) {
    return true
  }
  const bounds = obstacles.map((obstacle) => getBoundFromCenteredRect(obstacle))
  return bounds.every((bound) => doBoundsOverlap(bound, outlineBounds))
}

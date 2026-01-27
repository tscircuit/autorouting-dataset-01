import type { Bounds } from "types/Bounds"

/**
 * Checks if a bounding box is completely within another.
 */
export const isWithin = (bounds: Bounds, inner: Bounds): boolean => {
  return (
    bounds.minX >= inner.minX &&
    bounds.maxX <= inner.maxX &&
    bounds.minY >= inner.minY &&
    bounds.maxY <= inner.maxY
  )
}

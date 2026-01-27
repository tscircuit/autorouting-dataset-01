import { Bounds } from "utils/Bounds"

/**
 * Checks if two bounding boxes overlap, with an optional margin.
 */
export const overlaps = (options: {
  boundsA: Bounds
  boundsB: Bounds
  margin?: number
}): boolean => {
  const { boundsA, boundsB, margin = 0 } = options
  return !(
    boundsA.maxX + margin < boundsB.minX - margin ||
    boundsA.minX - margin > boundsB.maxX + margin ||
    boundsA.maxY + margin < boundsB.minY - margin ||
    boundsA.minY - margin > boundsB.maxY + margin
  )
}

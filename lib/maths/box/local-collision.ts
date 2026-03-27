import type { Bounds } from "@tscircuit/math-utils"

export const getBoundsCenter = (bounds: Bounds): { x: number; y: number } => ({
  x: (bounds.minX + bounds.maxX) / 2,
  y: (bounds.minY + bounds.maxY) / 2,
})

export const isBoundsInsideBounds = (inner: Bounds, outer: Bounds): boolean => {
  return (
    inner.minX >= outer.minX &&
    inner.maxX <= outer.maxX &&
    inner.minY >= outer.minY &&
    inner.maxY <= outer.maxY
  )
}

export const getBoundsGapViolation = (
  boundsA: Bounds,
  boundsB: Bounds,
  gap: number,
): {
  collides: boolean
  overlapX: number
  overlapY: number
} => {
  const centerA = getBoundsCenter(boundsA)
  const centerB = getBoundsCenter(boundsB)
  const widthA = boundsA.maxX - boundsA.minX
  const widthB = boundsB.maxX - boundsB.minX
  const heightA = boundsA.maxY - boundsA.minY
  const heightB = boundsB.maxY - boundsB.minY

  const requiredDx = widthA / 2 + widthB / 2 + gap
  const requiredDy = heightA / 2 + heightB / 2 + gap
  const overlapX = requiredDx - Math.abs(centerB.x - centerA.x)
  const overlapY = requiredDy - Math.abs(centerB.y - centerA.y)

  return {
    collides: overlapX > 0 && overlapY > 0,
    overlapX,
    overlapY,
  }
}

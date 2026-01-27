import { Bounds } from "utils/Bounds"
import { getInnerBoard } from "utils/getInnerBoard"
import { isWithin } from "utils/isWithin"
import { overlaps } from "utils/overlaps"
import { GenerationContext } from "utils/GenerationContext"

/**
 * Finds a valid deterministic placement for a component footprint.
 */
export const findDeterministicPlacement = (
  options: {
    footprintSize: { width: number; height: number }
    existingBounds: Bounds[]
    boardSize: { width: number; height: number }
    gap: number
  },
  ctx: GenerationContext
): { pcbX: number; pcbY: number; width: number; height: number } | null => {
  const { footprintSize, existingBounds, boardSize, gap } = options
  const padding = Math.max(2, ctx.configuration.maxGapBetweenParts)
  const inner = getInnerBoard(boardSize, padding)
  const step = Math.max(0.5, gap / 2)
  const maxSpanX = Math.max(0, inner.maxX - inner.minX - footprintSize.width)
  const maxSpanY = Math.max(0, inner.maxY - inner.minY - footprintSize.height)
  const maxRing = Math.ceil(Math.max(maxSpanX, maxSpanY) / step)

  for (let ring = 0; ring <= maxRing; ring++) {
    for (let dx = -ring; dx <= ring; dx++) {
      for (let dy = -ring; dy <= ring; dy++) {
        if (Math.abs(dx) !== ring && Math.abs(dy) !== ring) continue
        const pcbX = dx * step
        const pcbY = dy * step
        const candidate: Bounds = {
          minX: pcbX - footprintSize.width / 2,
          maxX: pcbX + footprintSize.width / 2,
          minY: pcbY - footprintSize.height / 2,
          maxY: pcbY + footprintSize.height / 2,
        }
        if (!isWithin(candidate, inner)) continue

        let collision = false
        for (const existing of existingBounds) {
          if (overlaps({ boundsA: candidate, boundsB: existing, margin: gap })) {
            collision = true
            break
          }
        }
        if (collision) continue

        return {
          pcbX,
          pcbY,
          width: footprintSize.width,
          height: footprintSize.height,
        }
      }
    }
  }

  return null
}

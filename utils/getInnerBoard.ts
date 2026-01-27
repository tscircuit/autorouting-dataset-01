import type { Bounds } from "types/Bounds"

/**
 * Calculates the inner board boundaries based on board size and padding.
 */
export const getInnerBoard = (
  boardSize: { width: number; height: number },
  padding: number,
): Bounds => {
  return {
    minX: -boardSize.width / 2 + padding,
    maxX: boardSize.width / 2 - padding,
    minY: -boardSize.height / 2 + padding,
    maxY: boardSize.height / 2 - padding,
  }
}

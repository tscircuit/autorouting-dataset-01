import type { Bounds } from "maths/box"

export const buildGridPositions = (
  bounds: Bounds,
  step: number,
): Array<{ pcbX: number; pcbY: number }> => {
  const positions: Array<{ pcbX: number; pcbY: number }> = []
  for (let x = bounds.minX; x <= bounds.maxX + 1e-9; x += step) {
    for (let y = bounds.minY; y <= bounds.maxY + 1e-9; y += step) {
      positions.push({ pcbX: x, pcbY: y })
    }
  }
  return positions
}

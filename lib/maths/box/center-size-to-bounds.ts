import type { Bounds } from "@tscircuit/math-utils"
import { getBoundsCenter } from "@tscircuit/math-utils"

type CenterPoint = {
  x: number
  y: number
}

type Size = {
  width: number
  height: number
}

// TODO: I swear I cannot find this in @math-utils
export const centerSizeToBounds = (center: CenterPoint, size: Size): Bounds => {
  return {
    maxX: center.x + size.width / 2,
    minX: center.x - size.width / 2,
    maxY: center.y + size.height / 2,
    minY: center.y - size.height / 2,
  }
}

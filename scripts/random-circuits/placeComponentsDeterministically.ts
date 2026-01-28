import { Bounds } from "maths/box"
import type { ComponentSpecification } from "types/ComponentSpecification"
import type { GenerationContext } from "types/GenerationContext"
import { findDeterministicPlacement } from "scripts/random-circuits/findDeterministicPlacement"
import { randInt } from "maths/random/randInt"

/**
 * Places components on the board such that they do not overlap.
 */
export const placeComponentsDeterministically = (
  options: {
    rng: () => number
    components: ComponentSpecification[]
    boardSize: { width: number; height: number }
  },
  ctx: GenerationContext,
): ComponentSpecification[] => {
  const { rng, components, boardSize } = options
  const placed: ComponentSpecification[] = []
  const bounds: Bounds[] = []

  for (let i = 0; i < components.length; i++) {
    const component = components[i]
    const gap = randInt({
      rng,
      min: ctx.configuration.minGapBetweenParts,
      max: ctx.configuration.maxGapBetweenParts + 1,
    })
    const position = findDeterministicPlacement(
      {
        footprintSize: { width: component.width, height: component.height },
        existingBounds: bounds,
        boardSize,
        gap,
      },
      ctx,
    )
    if (!position) {
      continue
    }

    component.pcbX = position.pcbX
    component.pcbY = position.pcbY
    bounds.push({
      minX: component.pcbX - component.width / 2,
      maxX: component.pcbX + component.width / 2,
      minY: component.pcbY - component.height / 2,
      maxY: component.pcbY + component.height / 2,
    })
    placed.push(component)
  }

  return placed
}

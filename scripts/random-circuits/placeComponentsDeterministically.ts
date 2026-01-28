import type { Bounds } from "maths/box"
import { boundsAreaOverlap, boundsDistance } from "maths/box"
import { shuffleInPlace } from "maths/random/shuffleInPlace"
import { getBoardBoundsWithPadding } from "scripts/random-circuits/getBoardBoundsWithPadding"
import type { ComponentSpecification } from "types/ComponentSpecification"
import type { ComponentType } from "types/ComponentType"
import type { GenerationContext } from "types/GenerationContext"
import { buildGridPositions } from "scripts/random-circuits/buildGridPositions"

const placementOrder: ComponentType[] = [
  "resistor",
  "capacitor",
  "inductor",
  "diode",
  "transistor",
  "chip",
  "pinhead",
]

const gridGapByType: Record<ComponentType, number> = {
  resistor: 1,
  capacitor: 1,
  inductor: 2,
  diode: 1,
  transistor: 2,
  chip: 4,
  pinhead: 2,
}

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
  const padding = Math.max(2, ctx.configuration.maxGapBetweenParts)
  const inner = getBoardBoundsWithPadding(boardSize, padding)

  for (const type of placementOrder) {
    const gap = gridGapByType[type]
    const typeComponents = components.filter((component) => component.type === type)

    for (const component of typeComponents) {
      const positions = buildGridPositions(inner, gap)
      shuffleInPlace(positions, rng)

      let placedHere = false
      for (const position of positions) {
        const candidate: Bounds = {
          minX: position.pcbX - component.width / 2,
          maxX: position.pcbX + component.width / 2,
          minY: position.pcbY - component.height / 2,
          maxY: position.pcbY + component.height / 2,
        }

        let collision = false
        for (const existing of bounds) {
          if (boundsAreaOverlap(candidate, existing) > 0 && boundsDistance(candidate, existing) < gap) {
            collision = true
            break
          }
        }
        if (collision) continue

        component.pcbX = position.pcbX
        component.pcbY = position.pcbY
        bounds.push(candidate)
        placed.push(component)
        placedHere = true
        break
      }

      if (!placedHere) {
        continue
      }
    }
  }

  return placed
}

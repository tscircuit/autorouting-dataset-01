import type { Bounds } from "lib/maths/box"
import { boundsAreaOverlap, boundsDistance } from "lib/maths/box"
import { shuffleInPlace } from "lib/maths/random/shuffleInPlace"
import { buildGridPositions } from "scripts/random-circuits/buildGridPositions"
import { getBoardBoundsWithPadding } from "scripts/random-circuits/getBoardBoundsWithPadding"
import type { ComponentSpecification } from "types/ComponentSpecification"
import type { ComponentType } from "types/ComponentType"
import type { GenerationContext } from "types/GenerationContext"

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
  const boundsByLayer: Record<"top" | "bottom", Bounds[]> = {
    top: [],
    bottom: [],
  }
  const padding = Math.max(2, ctx.configuration.maxGapBetweenParts)
  const inner = getBoardBoundsWithPadding(boardSize, padding)

  for (const type of placementOrder) {
    const gap = gridGapByType[type]
    const typeComponents = components.filter(
      (component) => component.type === type,
    )

    for (const component of typeComponents) {
      const positions = buildGridPositions(inner, gap)
      shuffleInPlace(positions, rng)

      let placedHere = false
      for (const position of positions) {
        const rotationRadians = (component.pcbRotation * Math.PI) / 180
        const rotatedWidth =
          Math.abs(Math.cos(rotationRadians)) * component.width +
          Math.abs(Math.sin(rotationRadians)) * component.height
        const rotatedHeight =
          Math.abs(Math.sin(rotationRadians)) * component.width +
          Math.abs(Math.cos(rotationRadians)) * component.height
        const candidate: Bounds = {
          minX: position.pcbX - rotatedWidth / 2,
          maxX: position.pcbX + rotatedWidth / 2,
          minY: position.pcbY - rotatedHeight / 2,
          maxY: position.pcbY + rotatedHeight / 2,
        }

        let collision = false
        const layerBounds = boundsByLayer[component.layer]
        for (const existing of layerBounds) {
          if (
            boundsAreaOverlap(candidate, existing) > 0 &&
            boundsDistance(candidate, existing) < gap
          ) {
            collision = true
            break
          }
        }
        if (collision) continue

        component.pcbX = position.pcbX
        component.pcbY = position.pcbY
        boundsByLayer[component.layer].push(candidate)
        placed.push(component)
        placedHere = true
        break
      }

      if (!placedHere) {
      }
    }
  }

  return placed
}

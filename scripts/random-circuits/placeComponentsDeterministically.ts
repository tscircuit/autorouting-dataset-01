import type { Bounds } from "lib/maths/box"
import { getBoundsGapViolation, isBoundsInsideBounds } from "lib/maths/box"
import { getBoardBoundsWithPadding } from "scripts/random-circuits/getBoardBoundsWithPadding"
import type { ComponentSpecification } from "types/ComponentSpecification"
import type { ComponentType } from "types/ComponentType"
import type { GenerationContext } from "types/GenerationContext"

const gridGapByType: Record<ComponentType, number> = {
  resistor: 1,
  capacitor: 1,
  inductor: 2,
  diode: 1,
  transistor: 2,
  chip: 4,
  pinhead: 2,
}

const getRotatedBounds = (
  component: ComponentSpecification,
  pcbX = component.pcbX,
  pcbY = component.pcbY,
): Bounds => {
  const rotationRadians = (component.pcbRotation * Math.PI) / 180
  const rotatedWidth =
    Math.abs(Math.cos(rotationRadians)) * component.width +
    Math.abs(Math.sin(rotationRadians)) * component.height
  const rotatedHeight =
    Math.abs(Math.sin(rotationRadians)) * component.width +
    Math.abs(Math.cos(rotationRadians)) * component.height

  return {
    minX: pcbX - rotatedWidth / 2,
    maxX: pcbX + rotatedWidth / 2,
    minY: pcbY - rotatedHeight / 2,
    maxY: pcbY + rotatedHeight / 2,
  }
}

const clampComponentToBounds = (
  component: ComponentSpecification,
  outerBounds: Bounds,
): boolean => {
  const bounds = getRotatedBounds(component)
  const width = bounds.maxX - bounds.minX
  const height = bounds.maxY - bounds.minY
  const minCenterX = outerBounds.minX + width / 2
  const maxCenterX = outerBounds.maxX - width / 2
  const minCenterY = outerBounds.minY + height / 2
  const maxCenterY = outerBounds.maxY - height / 2

  if (minCenterX > maxCenterX || minCenterY > maxCenterY) {
    return false
  }

  component.pcbX = Math.min(Math.max(component.pcbX, minCenterX), maxCenterX)
  component.pcbY = Math.min(Math.max(component.pcbY, minCenterY), maxCenterY)
  return isBoundsInsideBounds(getRotatedBounds(component), outerBounds)
}

const cloneComponents = (
  components: ComponentSpecification[],
): ComponentSpecification[] => components.map((component) => ({ ...component }))

const getGapForPair = (
  componentA: ComponentSpecification,
  componentB: ComponentSpecification,
): number =>
  Math.max(gridGapByType[componentA.type], gridGapByType[componentB.type])

export const resolveComponentOverlapsIteratively = (
  options: {
    components: ComponentSpecification[]
    boardSize: { width: number; height: number }
    maxIterations?: number
  },
  ctx: GenerationContext,
): ComponentSpecification[] | null => {
  const maxIterations = options.maxIterations ?? 50
  const components = cloneComponents(options.components)
  const padding = Math.max(2, ctx.configuration.maxGapBetweenParts)
  const innerBounds = getBoardBoundsWithPadding(options.boardSize, padding)

  for (const component of components) {
    if (!clampComponentToBounds(component, innerBounds)) {
      return null
    }
  }

  for (let iteration = 0; iteration < maxIterations; iteration++) {
    let movedAny = false

    for (let i = 0; i < components.length - 1; i++) {
      for (let j = i + 1; j < components.length; j++) {
        const componentA = components[i]
        const componentB = components[j]
        const boundsA = getRotatedBounds(componentA)
        const boundsB = getRotatedBounds(componentB)
        const violation = getBoundsGapViolation(
          boundsA,
          boundsB,
          getGapForPair(componentA, componentB),
        )

        if (!violation.collides) continue

        movedAny = true
        const deltaX = componentB.pcbX - componentA.pcbX
        const deltaY = componentB.pcbY - componentA.pcbY

        if (violation.overlapX <= violation.overlapY) {
          const direction =
            deltaX === 0 ? ((i + j) % 2 === 0 ? 1 : -1) : Math.sign(deltaX)
          const moveBy = violation.overlapX / 2 + 0.01
          componentA.pcbX -= direction * moveBy
          componentB.pcbX += direction * moveBy
        } else {
          const direction =
            deltaY === 0 ? ((i + j) % 2 === 0 ? 1 : -1) : Math.sign(deltaY)
          const moveBy = violation.overlapY / 2 + 0.01
          componentA.pcbY -= direction * moveBy
          componentB.pcbY += direction * moveBy
        }

        if (
          !clampComponentToBounds(componentA, innerBounds) ||
          !clampComponentToBounds(componentB, innerBounds)
        ) {
          return null
        }
      }
    }

    if (!movedAny) {
      for (const component of components) {
        if (!isBoundsInsideBounds(getRotatedBounds(component), innerBounds)) {
          return null
        }
      }
      return components
    }
  }

  return null
}

/**
 * Places components on the board such that they do not overlap.
 */
export const placeComponentsDeterministically = (
  options: {
    rng: () => number
    components: ComponentSpecification[]
    boardSize: { width: number; height: number }
    maxIterations?: number
  },
  ctx: GenerationContext,
): ComponentSpecification[] | null => {
  const components = cloneComponents(options.components)
  const padding = Math.max(2, ctx.configuration.maxGapBetweenParts)
  const innerBounds = getBoardBoundsWithPadding(options.boardSize, padding)

  for (const component of components) {
    if (!clampComponentToBounds(component, innerBounds)) {
      return null
    }
  }

  return resolveComponentOverlapsIteratively(
    {
      components,
      boardSize: options.boardSize,
      maxIterations: options.maxIterations,
    },
    ctx,
  )
}

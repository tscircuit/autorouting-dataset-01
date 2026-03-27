import type { Bounds } from "lib/maths/box"
import { isBoundsInsideBounds } from "lib/maths/box"
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

const getExpandedBounds = (
  bounds: Bounds,
  component: ComponentSpecification,
  gap: number,
): Bounds => ({
  minX: bounds.minX - component.placementMargin.left - gap / 2,
  maxX: bounds.maxX + component.placementMargin.right + gap / 2,
  minY: bounds.minY - component.placementMargin.bottom - gap / 2,
  maxY: bounds.maxY + component.placementMargin.top + gap / 2,
})

const getOverlapViolationForPair = (
  componentA: ComponentSpecification,
  componentB: ComponentSpecification,
): {
  collides: boolean
  overlapX: number
  overlapY: number
} => {
  const gap = Math.max(
    gridGapByType[componentA.type],
    gridGapByType[componentB.type],
  )
  const expandedA = getExpandedBounds(
    getRotatedBounds(componentA),
    componentA,
    gap,
  )
  const expandedB = getExpandedBounds(
    getRotatedBounds(componentB),
    componentB,
    gap,
  )
  const overlapX =
    Math.min(expandedA.maxX, expandedB.maxX) -
    Math.max(expandedA.minX, expandedB.minX)
  const overlapY =
    Math.min(expandedA.maxY, expandedB.maxY) -
    Math.max(expandedA.minY, expandedB.minY)

  return {
    collides: overlapX > 0 && overlapY > 0,
    overlapX,
    overlapY,
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

const initializeComponentPositions = (options: {
  components: ComponentSpecification[]
  boardBounds: Bounds
  rng: () => number
}) => {
  const { components, boardBounds, rng } = options
  const gridSize = Math.ceil(Math.sqrt(components.length))
  const stepX = (boardBounds.maxX - boardBounds.minX) / Math.max(1, gridSize)
  const stepY = (boardBounds.maxY - boardBounds.minY) / Math.max(1, gridSize)
  const cells: Array<{ x: number; y: number }> = []

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      cells.push({
        x: boardBounds.minX + stepX * (col + 0.5),
        y: boardBounds.minY + stepY * (row + 0.5),
      })
    }
  }

  for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[cells[i], cells[j]] = [cells[j], cells[i]]
  }

  for (let index = 0; index < components.length; index++) {
    const component = components[index]
    const cell = cells[index % cells.length]
    const jitterX = (rng() - 0.5) * stepX * 0.45
    const jitterY = (rng() - 0.5) * stepY * 0.45
    component.pcbX = cell.x + jitterX
    component.pcbY = cell.y + jitterY
  }
}

export const resolveComponentOverlapsIteratively = (
  options: {
    rng: () => number
    components: ComponentSpecification[]
    boardSize: { width: number; height: number }
    maxIterations?: number
  },
  ctx: GenerationContext,
): ComponentSpecification[] | null => {
  const maxIterations = options.maxIterations ?? 50
  const components = cloneComponents(options.components)
  const padding = Math.max(
    2,
    ctx.configuration.maxGapBetweenParts,
    ctx.configuration.maxRandomMarginBetweenParts,
  )
  const innerBounds = getBoardBoundsWithPadding(options.boardSize, padding)

  initializeComponentPositions({
    components,
    boardBounds: innerBounds,
    rng: options.rng,
  })

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
        const violation = getOverlapViolationForPair(componentA, componentB)

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
  const padding = Math.max(
    2,
    ctx.configuration.maxGapBetweenParts,
    ctx.configuration.maxRandomMarginBetweenParts,
  )
  const innerBounds = getBoardBoundsWithPadding(options.boardSize, padding)

  for (const component of components) {
    if (!clampComponentToBounds(component, innerBounds)) {
      return null
    }
  }

  return resolveComponentOverlapsIteratively(
    {
      rng: options.rng,
      components,
      boardSize: options.boardSize,
      maxIterations: options.maxIterations,
    },
    ctx,
  )
}

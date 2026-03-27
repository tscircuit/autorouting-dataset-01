import { expect, test } from "bun:test"
import { getBoundsGapViolation } from "lib/maths/box"
import { resolveComponentOverlapsIteratively } from "scripts/random-circuits/placeComponentsDeterministically"
import type { ComponentSpecification } from "types/ComponentSpecification"
import type { GenerationContext } from "types/GenerationContext"

const ctx: GenerationContext = {
  configuration: {
    allowedStartIndex: 200,
    count: 1,
    minParts: 2,
    maxParts: 2,
    minGapBetweenParts: 1,
    maxGapBetweenParts: 3,
    seed: 42,
    layerCount: 4,
    tscircuitConfig: "",
    rootPath: "",
  },
}

test("getBoundsGapViolation detects required clearance collisions", () => {
  const violation = getBoundsGapViolation(
    { minX: -1, maxX: 1, minY: -1, maxY: 1 },
    { minX: 0.5, maxX: 2.5, minY: -1, maxY: 1 },
    0.5,
  )

  expect(violation.collides).toBe(true)
  expect(violation.overlapX).toBeGreaterThan(0)
  expect(violation.overlapY).toBeGreaterThan(0)
})

test("resolveComponentOverlapsIteratively separates overlapping parts across layers", () => {
  const components: ComponentSpecification[] = [
    {
      type: "resistor",
      name: "resistor-1",
      footprint: "0603",
      pinCount: 2,
      pinNames: ["pin1", "pin2"],
      pcbX: 0,
      pcbY: 0,
      pcbRotation: 0,
      layer: "top",
      width: 2.45,
      height: 0.95,
      connections: {},
    },
    {
      type: "pinhead",
      name: "pinhead-1",
      footprint: "pinrow4",
      pinCount: 4,
      pinNames: ["pin1", "pin2", "pin3", "pin4"],
      pcbX: 0,
      pcbY: 0,
      pcbRotation: 0,
      layer: "bottom",
      width: 9.12,
      height: 1.5,
      connections: {},
    },
  ]

  const resolved = resolveComponentOverlapsIteratively(
    {
      components,
      boardSize: { width: 40, height: 40 },
      maxIterations: 50,
    },
    ctx,
  )

  expect(resolved).not.toBeNull()
  expect(resolved).toHaveLength(2)

  const [componentA, componentB] = resolved!
  const violation = getBoundsGapViolation(
    {
      minX: componentA.pcbX - componentA.width / 2,
      maxX: componentA.pcbX + componentA.width / 2,
      minY: componentA.pcbY - componentA.height / 2,
      maxY: componentA.pcbY + componentA.height / 2,
    },
    {
      minX: componentB.pcbX - componentB.width / 2,
      maxX: componentB.pcbX + componentB.width / 2,
      minY: componentB.pcbY - componentB.height / 2,
      maxY: componentB.pcbY + componentB.height / 2,
    },
    2,
  )

  expect(violation.collides).toBe(false)
})

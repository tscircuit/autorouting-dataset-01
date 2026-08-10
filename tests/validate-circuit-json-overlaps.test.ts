import { expect, test } from "bun:test"
import type { AnyCircuitElement } from "circuit-json"
import { getPlatedHoleSmtPadOverlapErrors } from "scripts/validate-circuit-json/getPlatedHoleSmtPadOverlapErrors"

const makeCircuitJson = (pcbComponentId: string): AnyCircuitElement[] =>
  [
    {
      type: "pcb_smtpad",
      shape: "rect",
      pcb_smtpad_id: "pcb_smtpad_1",
      pcb_component_id: "pcb_component_1",
      x: 0,
      y: 0,
      width: 1,
      height: 1,
      layer: "top",
    },
    {
      type: "pcb_plated_hole",
      shape: "circle",
      pcb_plated_hole_id: "pcb_plated_hole_1",
      pcb_component_id: pcbComponentId,
      x: 0.25,
      y: 0,
      outer_diameter: 1,
      hole_diameter: 0.5,
      layers: ["top", "bottom"],
    },
  ] as AnyCircuitElement[]

test("rejects a plated hole overlapping another component's SMT pad", () => {
  expect(
    getPlatedHoleSmtPadOverlapErrors(makeCircuitJson("pcb_component_2")),
  ).toHaveLength(1)
})

test("allows copper belonging to the same component footprint", () => {
  expect(
    getPlatedHoleSmtPadOverlapErrors(makeCircuitJson("pcb_component_1")),
  ).toHaveLength(0)
})

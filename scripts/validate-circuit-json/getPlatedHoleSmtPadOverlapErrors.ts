import { checkPcbComponentOverlap } from "@tscircuit/checks"
import type { AnyCircuitElement, PcbFootprintOverlapError } from "circuit-json"

/** Finds cross-component overlaps between plated-hole copper and SMT pads. */
export const getPlatedHoleSmtPadOverlapErrors = (
  circuitJson: AnyCircuitElement[],
): PcbFootprintOverlapError[] =>
  checkPcbComponentOverlap(circuitJson).filter(
    (error) =>
      (error.pcb_plated_hole_ids?.length ?? 0) > 0 &&
      (error.pcb_smtpad_ids?.length ?? 0) > 0,
  )

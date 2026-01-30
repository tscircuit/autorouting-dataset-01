import { runAllChecks } from "@tscircuit/checks"
import type { AnyCircuitElement } from "circuit-json"

/**
 * Detect relaxed DRC failures that indicate routing is fundamentally invalid.
 */
const detectUnfixableRoutingIssues = async (
  circuitJson: AnyCircuitElement[],
): Promise<boolean> => {
  const errorList = await runAllChecks(circuitJson)
  const traceErrorList = errorList.filter(
    (error) => "error_type" in error && error.error_type === "pcb_trace_error",
  )
  return traceErrorList.length === 0
}

export { detectUnfixableRoutingIssues }

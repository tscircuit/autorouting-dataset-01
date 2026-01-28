import { fp } from "@tscircuit/footprinter"


/**
 * Returns the number of pins based on component type and footprint.
 */
export const getPinCounts = (
  footprint: string,
): number => {
  const circuitJson = fp.string(footprint).circuitJson()
  const pinHints = new Set<string>()
  let padCount = 0

  for (const element of circuitJson) {
    const typed = element as { type?: string; port_hints?: string[] }
    if (typed.type === "pcb_smtpad" || typed.type === "pcb_plated_hole") {
      padCount += 1
    }
    if (Array.isArray(typed.port_hints)) {
      for (const hint of typed.port_hints) {
        pinHints.add(String(hint))
      }
    }
  }

  return pinHints.size > 0 ? pinHints.size : padCount
}

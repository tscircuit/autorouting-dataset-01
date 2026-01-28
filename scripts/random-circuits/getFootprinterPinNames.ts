import { fp } from "@tscircuit/footprinter"

/**
 * Builds a pin list from a footprinter circuit JSON.
 */
export const getFootprinterPinNames = (footprint: string): string[] => {
  const circuitJson = fp.string(footprint).circuitJson()
  const numericPinHints = new Set<string>()
  const namedPinHints = new Set<string>()
  let padCount = 0

  for (const element of circuitJson) {
    const typed = element as { type?: string; port_hints?: string[] }
    if (typed.type === "pcb_smtpad" || typed.type === "pcb_plated_hole") {
      padCount += 1
    }
    if (Array.isArray(typed.port_hints)) {
      for (const hint of typed.port_hints) {
        const hintString = String(hint)
        if (/^\d+$/.test(hintString)) {
          numericPinHints.add(hintString)
        } else {
          namedPinHints.add(hintString)
        }
      }
    }
  }

  if (numericPinHints.size > 0) {
    return [...numericPinHints]
      .map((value) => Number(value))
      .sort((a, b) => a - b)
      .map((value) => `pin${value}`)
  }

  if (namedPinHints.size > 0) {
    return [...namedPinHints]
  }

  if (padCount > 0) {
    return Array.from({ length: padCount }, (_, index) => `pin${index + 1}`)
  }

  return []
}

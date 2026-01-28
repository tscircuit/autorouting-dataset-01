import { footprintToPinCount } from "scripts/random-circuits/footprintToPinCount"
import type { ComponentType } from "types/ComponentType"

/**
 * Returns the number of pins based on component type and footprint.
 */
export const getPinCounts = (
  componentType: ComponentType,
  footprint: string,
): number => {
  switch (componentType) {
    case "resistor":
    case "capacitor":
    case "inductor":
      return 2
    case "diode":
      return 2
    case "transistor":
      return 3
    case "chip":
    case "pinhead":
      return footprintToPinCount(footprint)
    default:
      return 2
  }
}

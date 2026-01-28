import { allowedPinsByType } from "scripts/random-circuits/allowedPinsByType"
import type { ComponentType } from "types/ComponentType"

/**
 * Filters footprinter pins by the component's allowed pin labels.
 */
export const filterPinNamesForComponent = (
  componentType: ComponentType,
  pinNames: string[],
): string[] => {
  const allowedPins = allowedPinsByType[componentType]
  if (!allowedPins || allowedPins.length === 0) {
    return pinNames
  }
  const allowedSet = new Set(allowedPins)
  const filtered = pinNames.filter((pin) => allowedSet.has(pin))
  return filtered.length > 0 ? filtered : pinNames
}

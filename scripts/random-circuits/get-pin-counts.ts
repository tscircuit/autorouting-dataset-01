import { filterPinNamesForComponent } from "scripts/random-circuits/filterPinNamesForComponent"
import { getFootprinterPinNames } from "scripts/random-circuits/getFootprinterPinNames"
import { normalizeFootprintForFootprinter } from "scripts/random-circuits/normalizeFootprintForFootprinter"
import type { ComponentType } from "types/ComponentType"
import type { PinInfo } from "types/PinInfo"

/**
 * Returns the pin count and pin names based on component type and footprint.
 */
export const getPinInfo = (
  componentType: ComponentType,
  footprint: string,
): PinInfo => {
  const normalized = normalizeFootprintForFootprinter(footprint)
  const pinNames = filterPinNamesForComponent(
    componentType,
    getFootprinterPinNames(normalized),
  )
  return {
    pinCount: pinNames.length,
    pinNames,
  }
}

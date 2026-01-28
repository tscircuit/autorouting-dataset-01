import type { ComponentType } from "types/ComponentType"
import { PinInfo } from "types/PinInfo"
import { normalizeFootprintForFootprinter } from "scripts/random-circuits/normalizeFootprintForFootprinter"
import { getFootprinterPinNames } from "scripts/random-circuits/getFootprinterPinNames"
import { filterPinNamesForComponent } from "scripts/random-circuits/filterPinNamesForComponent"

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

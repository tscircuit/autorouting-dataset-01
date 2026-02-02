/**
 * Normalizes footprint strings for footprinter by lowercasing and removing dashes.
 */
export const normalizeFootprintForFootprinter = (footprint: string): string => {
  if (typeof footprint !== "string") {
    throw new Error(`Expected footprint string, got ${typeof footprint}`)
  }
  const normalized = footprint.trim().toLowerCase().replace(/-/g, "")
  if (normalized.startsWith("pinheader")) {
    return normalized.replace(/^pinheader/, "pinrow")
  }
  if (normalized === "sod123" || normalized === "sod323") {
    return normalized
  }
  return normalized
}

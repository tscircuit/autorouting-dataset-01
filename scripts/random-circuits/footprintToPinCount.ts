/**
 * Derives the pin count from a footprint name.
 */
export const footprintToPinCount = (footprint: string): number => {
  if (footprint === "soic16") return 16
  if (footprint === "soic8" || footprint === "dip8") return 8
  if (footprint === "pinrow8") return 8
  if (footprint === "pinrow6") return 6
  if (footprint === "pinheader6") return 6
  if (footprint === "pinheader4") return 4
  if (footprint === "pinheader2") return 2
  return 2
}

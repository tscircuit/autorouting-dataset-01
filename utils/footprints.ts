/**
 * List of available footprints categorized by component type.
 */
export const footprints = {
    resistor: ["0402", "0603", "0805"],
    capacitor: ["0402", "0603", "0805"],
    inductor: ["0402", "0603", "0805"],
    diode: ["SOD-123", "SOD-323"],
    transistor: ["SOT-23", "SOT-223"],
    chip: ["pinrow6", "soic8", "soic16", "dip8", "pinrow8"],
    pinhead: ["pinheader2", "pinheader4", "pinheader6"]
} as const

/**
 * List of available footprints categorized by component type.
 */
export const footprints = {
  resistor: ["0402", "0603", "0805"],
  capacitor: ["0402", "0603", "0805"],
  inductor: ["0402", "0603", "0805"],
  diode: ["sod123", "sod323"],
  transistor: ["SOT-23", "SOT-223"],
  chip: [
    "soic8",
    "soic16",
    "dip8",
    "ssop8",
    "ssop16",
    "tssop8",
    "tssop16",
    "tssop20",
    "qfn16",
    "qfn24",
    "qfn32",
    "qfp16",
    "qfp32",
    "qfp48",
    "qfp64",
    "tqfp32",
    "tqfp48",
    "lqfp32",
    "lqfp48",
    "bga32",
    "bga64",
  ],
  pinhead: ["pinrow2", "pinrow4", "pinrow6"],
} as const

/**
 * Defined sizes for various component footprints.
 */
export const footprintSizes: Record<string, { width: number; height: number }> =
  {
    "0402": { width: 1.2, height: 0.7 } as const,
    "0603": { width: 1.6, height: 0.9 } as const,
    "0805": { width: 2.0, height: 1.25 } as const,
    "SOD-123": { width: 2.5, height: 1.25 } as const,
    "SOD-323": { width: 1.6, height: 0.8 } as const,
    "SOT-23": { width: 2.9, height: 1.3 } as const,
    "SOT-223": { width: 6.5, height: 3.7 } as const,
    pinrow6: { width: 10.0, height: 2.5 } as const,
    soic8: { width: 5.0, height: 4.0 } as const,
    soic16: { width: 10.0, height: 4.0 } as const,
    dip8: { width: 7.62, height: 7.62 } as const,
    pinrow8: { width: 12.5, height: 2.5 } as const,
    pinheader2: { width: 5.0, height: 2.5 } as const,
    pinheader4: { width: 10.0, height: 2.5 } as const,
    pinheader6: { width: 15.0, height: 2.5 } as const,
  } as const

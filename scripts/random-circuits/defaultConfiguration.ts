import type { GenerationConfiguration } from "types/GenerationConfiguration"

/**
 * Default configuration values for circuit generation.
 */
export const defaultConfiguration: GenerationConfiguration = {
  allowedStartIndex: 100,
  count: 100,
  minParts: 4,
  maxParts: 30,
  seed: 42,
  minGapBetweenParts: 1,
  maxGapBetweenParts: 3,
}

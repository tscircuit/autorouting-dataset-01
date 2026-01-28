import type { GenerationConfiguration } from "types/GenerationConfiguration"

/**
 * Default configuration values for circuit generation.
 */
export const defaultConfiguration: GenerationConfiguration = {
  allowedStartIndex: 200,
  count: 1,
  minParts: 15,
  maxParts: 30,
  seed: 42,
  minGapBetweenParts: 1,
  maxGapBetweenParts: 3,
}

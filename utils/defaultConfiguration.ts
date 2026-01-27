import { GenerationConfiguration } from "utils/GenerationConfiguration"

/**
 * Default configuration values for circuit generation.
 */
export const defaultConfiguration: GenerationConfiguration = {
  allowedStartIndex: 200,
  count: 100,
  minParts: 10,
  maxParts: 20,
  seed: 42,
  minGapBetweenParts: 1,
  maxGapBetweenParts: 3,
}

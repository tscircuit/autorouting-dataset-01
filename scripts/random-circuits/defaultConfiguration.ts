import path from "node:path"
import type { GenerationConfiguration } from "types/GenerationConfiguration"

/**
 * Default configuration values for circuit generation.
 */
export const defaultConfiguration: GenerationConfiguration = {
  allowedStartIndex: 200,
  count: 100,
  minParts: 4,
  maxParts: 30,
  seed: 42,
  minGapBetweenParts: 1,
  maxGapBetweenParts: 3,
  layerCount: 4,
  tscircuitConfig: path.join(
    import.meta.dir,
    "..",
    "..",
    "tscircuit.config.json",
  ),
  rootPath: path.join(import.meta.dir, "..", ".."),
}

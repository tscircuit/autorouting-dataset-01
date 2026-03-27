/**
 * Configuration options for the random circuit generation.
 */
export type GenerationConfiguration = {
  allowedStartIndex: number
  count: number
  minParts: number
  maxParts: number
  minGapBetweenParts: number
  maxGapBetweenParts: number
  seed: number
  layerCount: 2 | 4
  tscircuitConfig: string
  rootPath: string
}

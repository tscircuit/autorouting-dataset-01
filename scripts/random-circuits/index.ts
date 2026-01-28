import { defaultConfiguration } from "scripts/random-circuits/defaultConfiguration"
import { generateRandomDataset } from "scripts/random-circuits/generateRandomDataset"
import type { GenerationContext } from "types/GenerationContext"

/**
 * Script to generate a dataset of random circuits.
 * Its slides the components on the board and creates random connections between them.
 * It uses the default configuration to generate a set of random circuits.
 */
const main = async () => {
  const context: GenerationContext = {
    configuration: { ...defaultConfiguration },
  }
  await generateRandomDataset(context)
}

main()

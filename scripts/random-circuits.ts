import type { GenerationContext } from "types/GenerationContext"
import { defaultConfiguration } from "utils/defaultConfiguration"
import { generateRandomDataset } from "utils/generateRandomDataset"

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

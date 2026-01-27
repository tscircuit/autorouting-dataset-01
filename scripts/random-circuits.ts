import { generateRandomDataset } from "utils/generateRandomDataset"
import { defaultConfiguration } from "utils/defaultConfiguration"
import { GenerationContext } from "types/GenerationContext"

/**
 * Script to generate a dataset of random circuits.
 * This is used for stress testing or creating varied routing challenges.
 * It uses the default configuration to generate a set of random circuits.
 */
const main = async () => {
  const context: GenerationContext = {
    configuration: { ...defaultConfiguration },
  }
  await generateRandomDataset(context)
}

main()

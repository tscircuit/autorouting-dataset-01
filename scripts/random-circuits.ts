import { generateRandomDataset } from "utils/generateRandomDataset"
import { defaultConfiguration } from "utils/defaultConfiguration"
import { GenerationContext } from "types/GenerationContext"

const main = async () => {
  const context: GenerationContext = {
    configuration: { ...defaultConfiguration },
  }
  await generateRandomDataset(context)
}

main()

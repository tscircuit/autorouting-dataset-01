import { generateRandomDataset } from "utils/generateRandomDataset"
import { defaultConfiguration } from "utils/defaultConfiguration"
import { GenerationContext } from "utils/GenerationContext"

const main = async () => {
  const context: GenerationContext = {
    configuration: { ...defaultConfiguration },
  }
  await generateRandomDataset(context)
}

main()

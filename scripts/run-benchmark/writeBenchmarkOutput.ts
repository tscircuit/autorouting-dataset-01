import { writeFile } from "node:fs/promises"
import path from "node:path"

const writeBenchmarkOutput = async (inputs: {
  outputDirectory: string
  outputText: string
}) => {
  const { outputDirectory, outputText } = inputs
  const outputPath = path.join(outputDirectory, "benchmark-output.txt")
  await writeFile(outputPath, outputText)
}

export { writeBenchmarkOutput }

import { writeFile } from "node:fs/promises"
import path from "node:path"

/**
 * Write benchmark text and JSON outputs to disk.
 */
const writeBenchmarkOutput = async (inputs: {
  outputDirectory: string
  outputText: string
  summaryJsonText: string
  detailJsonText: string
}) => {
  const { outputDirectory, outputText, summaryJsonText, detailJsonText } = inputs
  const outputPath = path.join(outputDirectory, "benchmark-output.txt")
  const summaryJsonPath = path.join(outputDirectory, "benchmark-output.json")
  const detailJsonPath = path.join(outputDirectory, "benchmark-details.json")
  await writeFile(outputPath, outputText)
  await writeFile(summaryJsonPath, summaryJsonText)
  await writeFile(detailJsonPath, detailJsonText)
}

export { writeBenchmarkOutput }

import { writeFile } from "node:fs/promises"
import path from "node:path"

/**
 * Write benchmark text, JSON, and HTML outputs to disk.
 */
const writeBenchmarkOutput = async (inputs: {
  outputDirectory: string
  outputText: string
  summaryJsonText: string
  detailJsonText: string
  html_text?: string
}) => {
  const {
    outputDirectory,
    outputText,
    summaryJsonText,
    detailJsonText,
    html_text,
  } = inputs
  const outputPath = path.join(outputDirectory, "benchmark-output.txt")
  const summaryJsonPath = path.join(outputDirectory, "benchmark-output.json")
  const detailJsonPath = path.join(outputDirectory, "benchmark-details.json")
  const htmlPath = path.join(outputDirectory, "benchmark-visualization.html")

  await writeFile(outputPath, outputText)
  await writeFile(summaryJsonPath, summaryJsonText)
  await writeFile(detailJsonPath, detailJsonText)

  if (html_text) {
    await writeFile(htmlPath, html_text)
  }
}

export { writeBenchmarkOutput }

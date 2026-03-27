import { readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { componentToJsx } from "scripts/random-circuits/componentToJsx"
import type { ComponentSpecification } from "types/ComponentSpecification"

/**
 * Generates and writes a .tsx circuit file based on specifications.
 */
export const generateCircuitFile = async (options: {
  libDirectory: string
  allowedStartIndex: number
  circuitOffset: number
  components: ComponentSpecification[]
  boardSize: { width: number; height: number }
  layerCount: 2 | 4
  tscircuitConfig: string
  rootPath: string
}): Promise<void> => {
  const {
    libDirectory,
    allowedStartIndex,
    circuitOffset,
    components,
    boardSize,
    layerCount,
    tscircuitConfig,
    rootPath,
  } = options
  const body = components.map(componentToJsx).join("\n")
  const circuitId = String(allowedStartIndex + circuitOffset).padStart(3, "0")
  const fileName = `circuit${circuitId}.tsx`
  const outputPath = path.join(libDirectory, fileName)
  const source = `/** Randomly generated circuit ${
    allowedStartIndex + circuitOffset
  }. */
import { shouldAutorouterRun } from "lib/shouldAutorouterRun"

export default () => (
  <board routingDisabled={!shouldAutorouterRun()} layers={${layerCount}} width="${boardSize.width.toFixed(
    2,
  )}mm" height="${boardSize.height.toFixed(2)}mm">
${body}
  </board>
)
`
  const tsconfigFile = await readFile(tscircuitConfig)
  const stringFile = tsconfigFile.toString()
  let json: { includeBoardFiles: string[] } = { includeBoardFiles: [] }
  try {
    json = JSON.parse(stringFile)
  } catch (_e) {
    console.error("Something went wrong when reading ", tscircuitConfig)
    process.exit(1)
  }
  json?.includeBoardFiles.push(path.relative(rootPath, outputPath))

  await writeFile(outputPath, source)
  await writeFile(tscircuitConfig, JSON.stringify(json, null, 2))
}

import { writeFile } from "node:fs/promises"
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
}): Promise<void> => {
  const {
    libDirectory,
    allowedStartIndex,
    circuitOffset,
    components,
    boardSize,
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
  <board routingDisabled={!shouldAutorouterRun()} width="${boardSize.width.toFixed(
    2,
  )}mm" height="${boardSize.height.toFixed(2)}mm">
${body}
  </board>
)
`
  await writeFile(outputPath, source)
}

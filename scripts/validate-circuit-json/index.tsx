import { existsSync } from "node:fs"
import { readFile } from "node:fs/promises"
import { RootCircuit } from "@tscircuit/core"
import { getPlatedHoleSmtPadOverlapErrors } from "./getPlatedHoleSmtPadOverlapErrors"

type TscircuitConfig = {
  mainEntrypoint?: string
  ignoredFiles?: string[]
  includeBoardFiles?: string[]
}

const main = async (): Promise<void> => {
  const config = JSON.parse(
    await readFile("tscircuit.config.json", "utf8"),
  ) as TscircuitConfig
  const ignoredFiles = new Set(config.ignoredFiles ?? [])
  const circuitFiles = Array.from(
    new Set(
      [config.mainEntrypoint, ...(config.includeBoardFiles ?? [])].filter(
        (file): file is string => Boolean(file),
      ),
    ),
  ).filter((file) => !ignoredFiles.has(file) && existsSync(file))
  const failures: string[] = []

  process.env.TSCIRCUIT_DATASET_DISABLE_AUTOROUTER = "true"

  for (const circuitFile of circuitFiles) {
    const { default: Circuit } = await import(`../../${circuitFile}`)
    const circuit = new RootCircuit()
    circuit.schematicDisabled = true
    circuit.add(<Circuit />)
    await circuit.renderUntilSettled()

    for (const error of getPlatedHoleSmtPadOverlapErrors(
      circuit.getCircuitJson(),
    )) {
      failures.push(`${circuitFile}: ${error.message}`)
    }
  }

  if (failures.length > 0) {
    console.error(
      [
        "Found plated holes overlapping SMT pads from other components:",
        ...failures.map((failure) => `- ${failure}`),
      ].join("\n"),
    )
    process.exit(1)
  }

  console.log(`Validated ${circuitFiles.length} Circuit JSON files`)
}

void main()

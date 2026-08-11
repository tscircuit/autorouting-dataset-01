import { existsSync } from "node:fs"
import { readFile } from "node:fs/promises"
import { runAllPlacementChecks } from "@tscircuit/checks"
import { RootCircuit } from "@tscircuit/core"

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
  ).filter(
    (file) =>
      !ignoredFiles.has(file) &&
      existsSync(file) &&
      /lib\/circuit\/circuit1\d{2}\.tsx$/.test(file),
  )
  const failures: string[] = []

  process.env.TSCIRCUIT_DATASET_DISABLE_AUTOROUTER = "true"

  for (const circuitFile of circuitFiles) {
    const { default: Circuit } = await import(`../../${circuitFile}`)
    const circuit = new RootCircuit()
    circuit.schematicDisabled = true
    circuit.add(<Circuit />)
    await circuit.renderUntilSettled()

    const blockingErrors = (
      await runAllPlacementChecks(circuit.getCircuitJson())
    ).filter(
      (error) =>
        error.type === "pcb_footprint_overlap_error" ||
        error.type === "pcb_component_outside_board_error",
    )
    for (const error of blockingErrors) {
      failures.push(`${circuitFile}: ${error.message}`)
    }
  }

  if (failures.length > 0) {
    console.error(
      [
        "tscircuit placement check found invalid PCB placement:",
        ...failures.map((failure) => `- ${failure}`),
      ].join("\n"),
    )
    process.exit(1)
  }

  console.log(
    `Validated ${circuitFiles.length} generated circuits with tscircuit placement checks`,
  )
}

void main()

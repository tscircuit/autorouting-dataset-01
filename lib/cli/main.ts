import { Command } from "commander"
import { registerRun } from "lib/cli/run/register"

export const program = new Command()

program
  .name("autorouting-dataset-runner")
  .description(
    "Benchmark autorouters against the tscircuit autorouting dataset",
  )
  .version("1.0.0")

registerRun(program)

program.parse()

type CliOptions = {
  scenarioCountLimit: number | null
  outputDirectory: string
  shouldShowHelp: boolean
}

/**
 * Parse CLI args for run-benchmark using a simple state machine.
 */
const getCliOptionsFromArgList = (argList: string[]): CliOptions => {
  const defaultOutputDirectory = process.cwd()
  const cliOptions: CliOptions = {
    scenarioCountLimit: null,
    outputDirectory: defaultOutputDirectory,
    shouldShowHelp: false,
  }
  let parseState: "default" | "scenario_limit" | "output_dir" = "default"

  for (const arg of argList) {
    switch (parseState) {
      case "scenario_limit": {
        const scenarioCountLimitInput = Number(arg)
        if (Number.isFinite(scenarioCountLimitInput)) {
          const scenarioCountLimitValue = Math.floor(scenarioCountLimitInput)
          if (scenarioCountLimitValue > 0) {
            cliOptions.scenarioCountLimit = scenarioCountLimitValue
          }
        }
        parseState = "default"
        break
      }
      case "output_dir": {
        if (arg.length > 0) {
          cliOptions.outputDirectory = arg
        }
        parseState = "default"
        break
      }
      default: {
        if (arg === "--help" || arg === "-h") {
          cliOptions.shouldShowHelp = true
        } else if (arg === "--scenario-limit") {
          parseState = "scenario_limit"
        } else if (arg === "--output-dir") {
          parseState = "output_dir"
        } else if (arg.startsWith("--scenario-limit=")) {
          const scenarioLimitText = arg.split("=", 2)[1]
          const scenarioLimitNumber = Number(scenarioLimitText)
          if (Number.isFinite(scenarioLimitNumber)) {
            const scenarioCountLimitValue = Math.floor(scenarioLimitNumber)
            if (scenarioCountLimitValue > 0) {
              cliOptions.scenarioCountLimit = scenarioCountLimitValue
            }
          }
        } else if (arg.startsWith("--output-dir=")) {
          const outputDirectoryText = arg.split("=", 2)[1]
          if (outputDirectoryText.length > 0) {
            cliOptions.outputDirectory = outputDirectoryText
          }
        }
        break
      }
    }
  }

  return cliOptions
}

export { getCliOptionsFromArgList }

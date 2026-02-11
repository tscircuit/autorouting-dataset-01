type CliOptions = {
  autorouterPath: string | null
  solverName: string | null
  scenarioCountLimit: number | null
  outputPath: string
  shouldShowHelp: boolean
}

/**
 * Parse CLI args for autorouting-dataset-runner.
 */
const getCliOptions = (argList: string[]): CliOptions => {
  const cliOptions: CliOptions = {
    autorouterPath: null,
    solverName: null,
    scenarioCountLimit: null,
    outputPath: "./benchmark-results.html",
    shouldShowHelp: false,
  }
  let parseState: "default" | "scenario_limit" | "output" = "default"
  let positionalCount = 0

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
      case "output": {
        if (arg.length > 0) {
          cliOptions.outputPath = arg
        }
        parseState = "default"
        break
      }
      default: {
        if (arg === "--help" || arg === "-h") {
          cliOptions.shouldShowHelp = true
        } else if (arg === "--scenario-limit") {
          parseState = "scenario_limit"
        } else if (arg === "--output" || arg === "-o") {
          parseState = "output"
        } else if (arg.startsWith("--scenario-limit=")) {
          const scenarioLimitText = arg.split("=", 2)[1]
          const scenarioLimitNumber = Number(scenarioLimitText)
          if (Number.isFinite(scenarioLimitNumber)) {
            const scenarioCountLimitValue = Math.floor(scenarioLimitNumber)
            if (scenarioCountLimitValue > 0) {
              cliOptions.scenarioCountLimit = scenarioCountLimitValue
            }
          }
        } else if (arg.startsWith("--output=")) {
          const outputText = arg.split("=", 2)[1]
          if (outputText.length > 0) {
            cliOptions.outputPath = outputText
          }
        } else if (!arg.startsWith("-")) {
          // Positional arguments: first is path, second is solver name
          if (positionalCount === 0) {
            cliOptions.autorouterPath = arg
          } else if (positionalCount === 1) {
            cliOptions.solverName = arg
          }
          positionalCount++
        }
        break
      }
    }
  }

  return cliOptions
}

export { getCliOptions }

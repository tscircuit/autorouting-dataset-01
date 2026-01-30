type CliOptions = {
  scenarioCountLimit: number
  shouldShowHelp: boolean
}

/**
 * Parse CLI args for run-benchmark using a simple state machine.
 */
const getCliOptionsFromArgList = (argList: string[]): CliOptions => {
  const defaultScenarioCountLimit = 5
  const cliOptions: CliOptions = {
    scenarioCountLimit: defaultScenarioCountLimit,
    shouldShowHelp: false,
  }
  let parseState: "default" | "scenario_limit" = "default"

  for (const arg of argList) {
    switch (parseState) {
      case "scenario_limit": {
        const scenarioCountLimitInput = Number(arg)
        if (
          Number.isFinite(scenarioCountLimitInput) &&
          scenarioCountLimitInput > 0
        ) {
          cliOptions.scenarioCountLimit = Math.floor(scenarioCountLimitInput)
        }
        parseState = "default"
        break
      }
      default: {
        if (arg === "--help" || arg === "-h") {
          cliOptions.shouldShowHelp = true
        } else if (arg === "--scenario-limit") {
          parseState = "scenario_limit"
        } else if (arg.startsWith("--scenario-limit=")) {
          const scenarioLimitText = arg.split("=", 2)[1]
          const scenarioLimitNumber = Number(scenarioLimitText)
          if (
            Number.isFinite(scenarioLimitNumber) &&
            scenarioLimitNumber > 0
          ) {
            cliOptions.scenarioCountLimit = Math.floor(scenarioLimitNumber)
          }
        }
        break
      }
    }
  }

  return cliOptions
}

export { getCliOptionsFromArgList }

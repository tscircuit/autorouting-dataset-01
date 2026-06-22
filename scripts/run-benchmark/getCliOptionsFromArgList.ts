type CliOptions = {
  scenarioCountLimit: number | null
  concurrency: number | null
  outputDirectory: string
  shouldShowHelp: boolean
}

const parsePositiveInteger = (input: string): number | null => {
  const numericInput = Number(input)
  if (!Number.isFinite(numericInput)) return null

  const integerValue = Math.floor(numericInput)
  return integerValue > 0 ? integerValue : null
}

/**
 * Parse CLI args for run-benchmark using a simple state machine.
 */
const getCliOptionsFromArgList = (argList: string[]): CliOptions => {
  const defaultOutputDirectory = process.cwd()
  const cliOptions: CliOptions = {
    scenarioCountLimit: null,
    concurrency: null,
    outputDirectory: defaultOutputDirectory,
    shouldShowHelp: false,
  }
  let parseState: "default" | "scenario_limit" | "concurrency" | "output_dir" =
    "default"

  for (const arg of argList) {
    switch (parseState) {
      case "scenario_limit": {
        const scenarioCountLimit = parsePositiveInteger(arg)
        if (scenarioCountLimit !== null) {
          cliOptions.scenarioCountLimit = scenarioCountLimit
        }
        parseState = "default"
        break
      }
      case "concurrency": {
        const concurrency = parsePositiveInteger(arg)
        if (concurrency !== null) {
          cliOptions.concurrency = concurrency
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
        } else if (arg === "--concurrency") {
          parseState = "concurrency"
        } else if (arg === "--output-dir") {
          parseState = "output_dir"
        } else if (arg.startsWith("--scenario-limit=")) {
          const scenarioLimitText = arg.split("=", 2)[1]
          const scenarioCountLimit = parsePositiveInteger(scenarioLimitText)
          if (scenarioCountLimit !== null) {
            cliOptions.scenarioCountLimit = scenarioCountLimit
          }
        } else if (arg.startsWith("--concurrency=")) {
          const concurrencyText = arg.split("=", 2)[1]
          const concurrency = parsePositiveInteger(concurrencyText)
          if (concurrency !== null) {
            cliOptions.concurrency = concurrency
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

import path from "node:path"
import { getCliOptionsFromArgList } from "scripts/run-benchmark/getCliOptionsFromArgList"
import { loadScenarioList } from "scripts/run-benchmark/loadScenarioList"
import { outputTabled } from "scripts/run-benchmark/outputTabled"
import { runBenchmark } from "scripts/run-benchmark/runBenchmark"
import { SOLVER_CONSTRUCTOR_LIST } from "scripts/run-benchmark/solvers"
import { writeBenchmarkOutput } from "scripts/run-benchmark/writeBenchmarkOutput"

/**
 * Run benchmark script that benchmarks the autorouter against predefined
 * scenarios and outputs the results in a table format.
 */
const main = async () => {
  const datasetDirectory = path.resolve("lib", "dataset")
  const argList = process.argv.slice(2)
  const cliOptions = getCliOptionsFromArgList(argList)
  if (cliOptions.shouldShowHelp) {
    console.log([
      "Usage:",
      "  bun scripts/run-benchmark [options]",
      "",
      "Options:",
      "  --scenario-limit <count>  Limit number of scenarios (default: 5)",
      "  -h, --help                Show this help text",
      "",
      "Examples:",
      "  bun scripts/run-benchmark --scenario-limit 5",
    ].join("\n"))
    return
  }
  const scenarioList = await loadScenarioList({
    datasetDirectory,
    scenarioCountLimit: cliOptions.scenarioCountLimit,
  })

  if (scenarioList.length === 0) {
    console.log("No dataset files found in lib/dataset.")
    return
  }

  const resultRowList = runBenchmark({
    scenarioList,
    solverConstructorList: SOLVER_CONSTRUCTOR_LIST,
  })

  const outputText = outputTabled({ resultRowList, scenarioList })
  console.log(outputText)

  const outputDirectory = path.resolve("scripts", "run-benchmark")
  await writeBenchmarkOutput({ outputDirectory, outputText })
}

void main()

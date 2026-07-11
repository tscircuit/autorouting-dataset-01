import path from "node:path"
import { buildBenchmarkDetailsJson } from "scripts/run-benchmark/buildBenchmarkDetailsJson"
import { buildBenchmarkSummaryJson } from "scripts/run-benchmark/buildBenchmarkSummaryJson"
import { generateHtmlVisualization } from "scripts/run-benchmark/generateHtmlVisualization"
import { getCliOptionsFromArgList } from "scripts/run-benchmark/getCliOptionsFromArgList"
import { loadPreviousBestBenchmarkRow } from "scripts/run-benchmark/loadPreviousBestBenchmarkRow"
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
    console.log(
      [
        "Usage:",
        "  bun scripts/run-benchmark [options]",
        "",
        "Options:",
        "  --scenario-limit <count>  Limit number of scenarios (default: all)",
        "  --output-dir <path>       Output directory (default: cwd)",
        "  --previous-results <path> Previous benchmark-output.json to show old best result",
        "  -h, --help                Show this help text",
        "",
        "Examples:",
        "  bun scripts/run-benchmark --scenario-limit 5",
      ].join("\n"),
    )
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

  const solverCount = SOLVER_CONSTRUCTOR_LIST.length
  const totalRunCount = scenarioList.length * solverCount
  console.log(
    `Loaded ${scenarioList.length} scenarios across ${solverCount} solvers (${totalRunCount} total runs).`,
  )

  const { resultRowList, scenarioResultList } = await runBenchmark({
    scenarioList,
    solverConstructorList: SOLVER_CONSTRUCTOR_LIST,
  })

  const previousBestRow = await loadPreviousBestBenchmarkRow(
    cliOptions.previousResultsPath,
  )

  const outputText = outputTabled({
    resultRowList,
    scenarioList,
    previousBestRow,
  })
  console.log(outputText)

  const summaryJson = buildBenchmarkSummaryJson({
    resultRowList,
    scenarioList,
    previousBestRow,
  })
  const detailJson = buildBenchmarkDetailsJson({
    scenarioResultList,
    scenarioList,
  })
  const summaryJsonText = JSON.stringify(summaryJson, null, 2)
  const detailJsonText = JSON.stringify(detailJson, null, 2)

  const html_text = generateHtmlVisualization({
    summary_json: summaryJson,
    detail_json: detailJson,
    result_row_list: resultRowList,
  })

  const outputDirectory = path.resolve(cliOptions.outputDirectory)
  await writeBenchmarkOutput({
    outputDirectory,
    outputText,
    summaryJsonText,
    detailJsonText,
    html_text,
  })
}

void main()

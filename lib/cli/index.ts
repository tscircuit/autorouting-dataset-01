import path from "node:path"
import { fileURLToPath } from "node:url"
import { writeFile, access, mkdir } from "node:fs/promises"
import { buildBenchmarkDetailsJson } from "scripts/run-benchmark/buildBenchmarkDetailsJson"
import { buildBenchmarkSummaryJson } from "scripts/run-benchmark/buildBenchmarkSummaryJson"
import { generateHtmlVisualization } from "scripts/run-benchmark/generateHtmlVisualization"
import { loadScenarioList } from "scripts/run-benchmark/loadScenarioList"
import { outputTabled } from "scripts/run-benchmark/outputTabled"
import { getCliOptions } from "lib/cli/getCliOptions"
import { loadUserAutorouter } from "lib/cli/loadUserAutorouter"
import { runSingleSolverBenchmark } from "lib/cli/runSingleSolverBenchmark"

/**
 * Find the dataset directory, checking multiple possible locations.
 */
const findDatasetDirectory = async (): Promise<string> => {
  const possiblePaths = [
    // When running from source (development)
    path.resolve(process.cwd(), "lib/dataset"),
    // When installed as a package (the package root contains lib/dataset)
    path.resolve(
      fileURLToPath(import.meta.url),
      "..",
      "..",
      "..",
      "lib",
      "dataset",
    ),
    // Bundled CLI in dist/cli, dataset in lib/dataset
    path.resolve(fileURLToPath(import.meta.url), "..", "..", "lib", "dataset"),
  ]

  for (const datasetPath of possiblePaths) {
    try {
      await access(datasetPath)
      return datasetPath
    } catch {
      // Path doesn't exist, try next
    }
  }

  throw new Error(
    `Could not find dataset directory. Checked: ${possiblePaths.join(", ")}`,
  )
}

const main = async () => {
  const cliOptions = getCliOptions(process.argv.slice(2))

  if (cliOptions.shouldShowHelp) {
    console.log(
      [
        "Usage:",
        "  autorouting-dataset-runner <path-to-autorouter> [solver-name] [options]",
        "",
        "Arguments:",
        "  <path-to-autorouter>      Path to your autorouter TypeScript file",
        "  [solver-name]             Optional: specific export name to use as solver",
        "                            (if omitted, exports containing 'Pipeline' are auto-detected)",
        "",
        "Options:",
        "  --scenario-limit <count>  Limit number of scenarios (default: all)",
        "  --output <path>           Output HTML file path (default: results/<solver-name>.html)",
        "  -h, --help                Show this help text",
        "",
        "Examples:",
        "  autorouting-dataset-runner ./MyAutorouter.ts",
        "  autorouting-dataset-runner ./MyAutorouter.ts MyCustomPipeline",
        "  autorouting-dataset-runner ./src/solvers.ts AutoroutingPipelineSolver2 --scenario-limit 10",
        "  autorouting-dataset-runner ./solver.ts --output results.html",
      ].join("\n"),
    )
    return
  }

  if (!cliOptions.autorouterPath) {
    console.error("Error: Please provide a path to your autorouter file.")
    console.error(
      "Run 'autorouting-dataset-runner --help' for usage information.",
    )
    process.exit(1)
  }

  const autorouterAbsolutePath = path.resolve(cliOptions.autorouterPath)
  console.log(`Loading autorouter from: ${autorouterAbsolutePath}`)

  const { solverConstructor, solverName } = await loadUserAutorouter(
    autorouterAbsolutePath,
    cliOptions.solverName,
  )
  console.log(`Using autorouter: ${solverName}`)

  // Load dataset from the package's lib/dataset directory
  const datasetDirectory = await findDatasetDirectory()
  const scenarioList = await loadScenarioList({
    datasetDirectory,
    scenarioCountLimit: cliOptions.scenarioCountLimit,
  })

  if (scenarioList.length === 0) {
    console.error(
      "No dataset files found. Ensure the package is installed correctly.",
    )
    process.exit(1)
  }

  console.log(`Running benchmark with ${scenarioList.length} scenarios...`)
  console.log("")

  const { resultRowList, scenarioResultList } = await runSingleSolverBenchmark({
    scenarioList,
    solverConstructor,
    solverName,
  })

  // Output terminal stats
  const outputText = outputTabled({ resultRowList, scenarioList })
  console.log("")
  console.log(outputText)

  // Generate HTML
  const summaryJson = buildBenchmarkSummaryJson({ resultRowList, scenarioList })
  const detailJson = buildBenchmarkDetailsJson({
    scenarioResultList,
    scenarioList,
  })

  const htmlText = generateHtmlVisualization({
    summary_json: summaryJson,
    detail_json: detailJson,
    result_row_list: resultRowList,
  })

  // Determine output path - use solver name if no custom path provided
  const outputDir = path.resolve("results")
  await mkdir(outputDir, { recursive: true })

  const outputPath =
    cliOptions.outputPath !== "./benchmark-results.html"
      ? path.resolve(cliOptions.outputPath)
      : path.join(outputDir, `${solverName}.html`)

  await writeFile(outputPath, htmlText)
  console.log(`\nHTML results written to: ${outputPath}`)
}

main().catch((error) => {
  console.error("Error:", error.message)
  process.exit(1)
})

import { access, mkdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import type { Command } from "commander"
import kleur from "kleur"
import { loadUserAutorouter } from "lib/cli/loadUserAutorouter"
import { buildBenchmarkDetailsJson } from "scripts/run-benchmark/buildBenchmarkDetailsJson"
import { buildBenchmarkSummaryJson } from "scripts/run-benchmark/buildBenchmarkSummaryJson"
import { generateHtmlVisualization } from "scripts/run-benchmark/generateHtmlVisualization"
import { loadScenarioList } from "scripts/run-benchmark/loadScenarioList"
import { outputTabled } from "scripts/run-benchmark/outputTabled"
import { runBenchmark } from "scripts/run-benchmark/runBenchmark"
import { solverDisplayNameByConstructor } from "scripts/run-benchmark/solvers"

interface RunOptions {
  scenarioLimit?: string
  output?: string
}

const findDatasetDirectory = async (): Promise<string> => {
  const possiblePaths = [
    path.resolve(process.cwd(), "lib/dataset"),
    path.resolve(
      fileURLToPath(import.meta.url),
      "..",
      "..",
      "..",
      "..",
      "lib",
      "dataset",
    ),
    path.resolve(
      fileURLToPath(import.meta.url),
      "..",
      "..",
      "..",
      "lib",
      "dataset",
    ),
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

export const registerRun = (program: Command) => {
  program
    .command("run", { isDefault: true })
    .description("Run benchmark on an autorouter")
    .argument("<autorouter-path>", "Path to autorouter TypeScript file")
    .argument("[solver-name]", "Specific export name to use as solver")
    .option("-l, --scenario-limit <count>", "Limit number of scenarios to run")
    .option("-o, --output <path>", "Output HTML file path")
    .action(
      async (
        autorouterPath: string,
        solverName: string | undefined,
        options: RunOptions,
      ) => {
        try {
          const absolutePath = path.resolve(autorouterPath)
          console.log(
            `${kleur.cyan("Loading autorouter from:")} ${absolutePath}`,
          )

          const { solverConstructor, solverName: detectedSolverName } =
            await loadUserAutorouter(absolutePath, solverName)

          const finalSolverName = solverName || detectedSolverName
          console.log(
            `${kleur.green("✓")} Using autorouter: ${kleur.bold(finalSolverName)}`,
          )

          // Register the solver's display name for runBenchmark
          solverDisplayNameByConstructor.set(solverConstructor, finalSolverName)

          const datasetDirectory = await findDatasetDirectory()
          const scenarioCountLimit = options.scenarioLimit
            ? Number.parseInt(options.scenarioLimit, 10)
            : null

          const scenarioList = await loadScenarioList({
            datasetDirectory,
            scenarioCountLimit,
          })

          if (scenarioList.length === 0) {
            console.error(
              kleur.red(
                "No dataset files found. Ensure the package is installed correctly.",
              ),
            )
            process.exit(1)
          }

          console.log(
            `\n${kleur.cyan("Running benchmark with")} ${kleur.bold(String(scenarioList.length))} ${kleur.cyan("scenarios...")}\n`,
          )

          const { resultRowList, scenarioResultList } = await runBenchmark({
            scenarioList,
            solverConstructorList: [solverConstructor],
          })

          const outputText = outputTabled({ resultRowList, scenarioList })
          console.log("")
          console.log(outputText)

          const summaryJson = buildBenchmarkSummaryJson({
            resultRowList,
            scenarioList,
          })
          const detailJson = buildBenchmarkDetailsJson({
            scenarioResultList,
            scenarioList,
          })

          const htmlText = generateHtmlVisualization({
            summary_json: summaryJson,
            detail_json: detailJson,
            result_row_list: resultRowList,
          })

          const outputDir = path.resolve("results")
          await mkdir(outputDir, { recursive: true })

          const outputPath = options.output
            ? path.resolve(options.output)
            : path.join(outputDir, `${finalSolverName}.html`)

          await writeFile(outputPath, htmlText)
          console.log(
            `\n${kleur.green("✓")} HTML results written to: ${kleur.cyan(outputPath)}`,
          )

          process.exit(0)
        } catch (error) {
          const message = error instanceof Error ? error.message : String(error)
          console.error(`${kleur.red("Error:")} ${message}`)
          process.exit(1)
        }
      },
    )
}

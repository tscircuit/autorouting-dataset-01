import { readFile, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import {
  AutoroutingPipeline1_OriginalUnravel,
  AutoroutingPipelineSolver as AutoroutingPipelineSolver2_PortPointPathing,
} from "@tscircuit/capacity-autorouter"


type SimpleRouteJson = ConstructorParameters<
  typeof AutoroutingPipelineSolver2_PortPointPathing
>[0]

type SolverConstructor =
  | typeof AutoroutingPipelineSolver2_PortPointPathing
  | typeof AutoroutingPipeline1_OriginalUnravel

const SOLVERS: SolverConstructor[] = [
  AutoroutingPipelineSolver2_PortPointPathing,
  AutoroutingPipeline1_OriginalUnravel,
]

const detectUnfixableRoutingIssues = () => {
  /**
   * TODO:
   * - some of the trace generated are impossible to fixed like they are on same layer crossing other trace of different net.
   * - some trace could enter the wrong obstacle pad area, it still connections but this is just wrong
   */
  // Relaxed DRC Passed  = detectUnfixableRoutingIssues
  return false
}

const failureOutput = (solver: AutoroutingPipelineSolver2_PortPointPathing) => {
  /**
   * TODO: this will take the solver and create each pipeline stage svg output
   * failing in detectUnfixableRoutingIssues is also a failure as is solver.failed
   */
}


const outputTabled = () => {
  /**
   * TODO: impliment a table that will look like this
   * +----------------+----------------+----------------+------------------------------+
   * |   Solver         | Total Time (ms)      | Success Rate   | % Relaxed DRC Passed |
   * +----------------+----------------+----------------+------------------------------+
   * |   AutoroutingPipelineSolver2_PortPointPathing       | 120            | 100%           |          20%               |
   * |   AutoroutingPipeline1_OriginalUnravel              | 150            | 90%            |          30%               |
   * |   Solver A       | 200            | 80%            |          40%               |
   * |   Solver B       | 180            | 85%            |          10%               |
   * +----------------+----------------+----------------+-----------------------------+
   */
}


/**
 * Run benchmark script
 * This benchmarks the autorouter against
 * some predefined scenarios and outputs the results.
 */
const main = async () => {
  const datasetDirectory = path.resolve("lib", "dataset")
  const datasetFiles = (await readdir(datasetDirectory)).slice(0, 5)
    .filter((fileName) => fileName.endsWith(".simple-route-before.json"))
    .sort()

  if (datasetFiles.length === 0) {
    console.log("No dataset files found in lib/dataset.")
    return
  }

  const scenarioList: Array<{
    scenarioName: string
    simpleRouteJson: SimpleRouteJson
  }> = []

  for (const fileName of datasetFiles) {
    const scenarioName = fileName.replace(".simple-route-before.json", "")
    const simpleRouteJsonText = await readFile(
      path.join(datasetDirectory, fileName),
      "utf8",
    )
    const simpleRouteJson = JSON.parse(simpleRouteJsonText) as SimpleRouteJson
    scenarioList.push({ scenarioName, simpleRouteJson })
  }

  const resultRows: Array<{
    solverName: string
    totalTimeMs: number
    successRatePercent: number
    relaxedDrcRatePercent: number | null
  }> = []

  for (const solverClass of SOLVERS) {
    let totalTimeMs = 0
    let successCount = 0
    let relaxedDrcPassedCount = 0

    for (const scenario of scenarioList) {
      const solver = new solverClass(scenario.simpleRouteJson)
      const startMs = Date.now()
      solver.solve()
      const elapsedMs = Date.now() - startMs
      totalTimeMs += elapsedMs

      const solved = solver.solved && !solver.failed
      if (solved) {
        successCount += 1
      }

      const relaxedDrcPassed = detectUnfixableRoutingIssues()
      if (relaxedDrcPassed) {
        relaxedDrcPassedCount += 1
      }
    }

    const scenarioCount = scenarioList.length
    const successRatePercent =
      scenarioCount === 0 ? 0 : (successCount / scenarioCount) * 100
    const relaxedDrcRatePercent =
      relaxedDrcPassedCount === 0
        ? null
        : (relaxedDrcPassedCount / scenarioCount) * 100

    resultRows.push({
      solverName: solverClass.name,
      totalTimeMs,
      successRatePercent,
      relaxedDrcRatePercent,
    })
  }

  const tableHeaders = [
    "Solver",
    "Total Time (ms)",
    "Success Rate",
    "% Relaxed DRC Passed",
  ]

  const tableRows = resultRows.map((result) => [
    result.solverName,
    `${Math.round(result.totalTimeMs)}`,
    `${result.successRatePercent.toFixed(1)}%`,
    result.relaxedDrcRatePercent === null
      ? "n/a"
      : `${result.relaxedDrcRatePercent.toFixed(1)}%`,
  ])

  const columnWidths = tableHeaders.map((header, columnIndex) => {
    let maxWidth = header.length
    for (const rowCells of tableRows) {
      const cellText = rowCells[columnIndex]
      if (cellText.length > maxWidth) {
        maxWidth = cellText.length
      }
    }
    return maxWidth
  })

  const separator = `+${columnWidths
    .map((width) => "-".repeat(width + 2))
    .join("+")}+`

  const headerLine = `| ${tableHeaders
    .map((header, columnIndex) => header.padEnd(columnWidths[columnIndex]))
    .join(" | ")} |`

  const bodyLines = tableRows.map(
    (rowCells) =>
      `| ${rowCells
        .map((cellText, columnIndex) =>
          cellText.padEnd(columnWidths[columnIndex]),
        )
        .join(" | ")} |`,
  )

  const tableText = [
    separator,
    headerLine,
    separator,
    ...bodyLines,
    separator,
  ].join("\n")

  const outputLines = [
    tableText,
    "",
    `Scenarios: ${scenarioList.length}`,
  ]

  const outputText = outputLines.join("\n")
  console.log(outputText)

  const outputDirectory = path.resolve("scripts", "run-benchmark")
  const outputPath = path.join(outputDirectory, "benchmark-output.txt")
  await writeFile(outputPath, outputText)
}

void main()

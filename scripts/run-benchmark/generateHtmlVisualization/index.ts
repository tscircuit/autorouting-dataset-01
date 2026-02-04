import { generateChartScripts } from "scripts/run-benchmark/generateHtmlVisualization/generateChartScripts"
import { generateClientDebuggerScript } from "scripts/run-benchmark/generateHtmlVisualization/generateClientDebuggerScript"
import { generateHeader } from "scripts/run-benchmark/generateHtmlVisualization/generateHeader"
import { generatePerformanceOverview } from "scripts/run-benchmark/generateHtmlVisualization/generatePerformanceOverview"
import { generateScenarioDetails } from "scripts/run-benchmark/generateHtmlVisualization/generateScenarioDetails"
import { generateSolverDebuggerModal } from "scripts/run-benchmark/generateHtmlVisualization/generateSolverDebuggerModal"
import { generateSummaryTable } from "scripts/run-benchmark/generateHtmlVisualization/generateSummaryTable"
import { generateWebComponents } from "scripts/run-benchmark/generateHtmlVisualization/generateWebComponents"
import type { BenchmarkDetailsJson } from "types/run-benchmark/BenchmarkDetailsJson"
import type { BenchmarkRow } from "types/run-benchmark/BenchmarkRow"

/**
 * Generates a complete HTML visualization file with embedded benchmark data and interactive charts.
 */
export const generateHtmlVisualization = (inputs: {
  summary_json: {
    tableHeaderList: string[]
    tableRowList: string[][]
    scenarioCount: number
  }
  detail_json: BenchmarkDetailsJson
  result_row_list: BenchmarkRow[]
}) => {
  const { summary_json, detail_json, result_row_list } = inputs

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Autorouting Benchmark Results</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
</head>
<body class="bg-white text-gray-900 min-h-screen p-8">
    <div class="max-w-7xl mx-auto">
        ${generateHeader(summary_json)}
        ${generatePerformanceOverview()}
        ${generateSummaryTable(summary_json)}
        ${generateScenarioDetails(detail_json)}
    </div>
    ${generateWebComponents()}
    ${generateSolverDebuggerModal()}
    ${generateChartScripts(result_row_list)}
    ${generateClientDebuggerScript(detail_json)}
</body>
</html>`
}

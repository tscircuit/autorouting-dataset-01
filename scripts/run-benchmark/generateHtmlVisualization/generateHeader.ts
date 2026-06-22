import { formatTimeSeconds } from "scripts/run-benchmark/formatTimeSeconds"
import type { BenchmarkRow } from "types/run-benchmark/BenchmarkRow"

/**
 * Generates the HTML header section with benchmark title and scenario count.
 */
export const generateHeader = (summary_json: {
  scenarioCount: number
  previousBestRow?: BenchmarkRow | null
}) => {
  const previousBestHtml = summary_json.previousBestRow
    ? `<p class="text-gray-600">Old Best: <span class="font-semibold text-gray-800">${summary_json.previousBestRow.solverName}</span> - ${summary_json.previousBestRow.successRatePercent.toFixed(1)}% solved - P50 ${formatTimeSeconds(summary_json.previousBestRow.p50TimeMs)}</p>`
    : ""

  return `<header class="mb-8">
    <h1 class="text-4xl font-bold text-blue-600 mb-2">Autorouting Benchmark Results</h1>
    <p class="text-gray-600">Total Scenarios: ${summary_json.scenarioCount}</p>
    ${previousBestHtml}
</header>`
}

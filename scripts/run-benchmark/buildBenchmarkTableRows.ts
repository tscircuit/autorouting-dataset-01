import { formatTimeSeconds } from "scripts/run-benchmark/formatTimeSeconds"
import type { BenchmarkRow } from "types/run-benchmark/BenchmarkRow"

/**
 * Build table headers and rows for benchmark output.
 */
const buildBenchmarkTableRows = (inputs: {
  resultRowList: BenchmarkRow[]
}): { tableHeaderList: string[]; tableRowList: string[][] } => {
  const { resultRowList } = inputs
  const tableHeaderList = [
    "Solver",
    "Completed %",
    "Relaxed DRC Pass %",
    "P50 Time",
    "P95 Time",
  ]

  const tableRowList = resultRowList.map((result) => [
    result.solverName,
    `${result.successRatePercent.toFixed(1)}%`,
    result.relaxedDrcRatePercent === null
      ? "n/a"
      : `${result.relaxedDrcRatePercent.toFixed(1)}%`,
    formatTimeSeconds(result.p50TimeMs),
    formatTimeSeconds(result.p95TimeMs),
  ])

  return { tableHeaderList, tableRowList }
}

export { buildBenchmarkTableRows }

import { formatTimeSeconds } from "scripts/run-benchmark/formatTimeSeconds"
import type { BenchmarkRow } from "types/run-benchmark/BenchmarkRow"

/**
 * Build table headers and rows for benchmark output.
 */
const buildBenchmarkTableRows = (inputs: {
  resultRowList: BenchmarkRow[]
  previousBestRow?: BenchmarkRow | null
}): { tableHeaderList: string[]; tableRowList: string[][] } => {
  const { resultRowList, previousBestRow } = inputs
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

  if (previousBestRow) {
    tableRowList.push([
      `Old Best (${previousBestRow.solverName})`,
      `${previousBestRow.successRatePercent.toFixed(1)}%`,
      previousBestRow.relaxedDrcRatePercent === null
        ? "n/a"
        : `${previousBestRow.relaxedDrcRatePercent.toFixed(1)}%`,
      formatTimeSeconds(previousBestRow.p50TimeMs),
      formatTimeSeconds(previousBestRow.p95TimeMs),
    ])
  }

  return { tableHeaderList, tableRowList }
}

export { buildBenchmarkTableRows }

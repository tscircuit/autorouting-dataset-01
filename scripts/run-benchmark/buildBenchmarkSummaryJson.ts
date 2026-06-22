import { buildBenchmarkTableRows } from "scripts/run-benchmark/buildBenchmarkTableRows"
import type { BenchmarkRow } from "types/run-benchmark/BenchmarkRow"
import type { Scenario } from "types/run-benchmark/Scenario"

/**
 * Build JSON summary output for benchmark results.
 */
const buildBenchmarkSummaryJson = (inputs: {
  resultRowList: BenchmarkRow[]
  scenarioList: Scenario[]
  previousBestRow?: BenchmarkRow | null
}): {
  tableHeaderList: string[]
  tableRowList: string[][]
  scenarioCount: number
  resultRowList: BenchmarkRow[]
  previousBestRow: BenchmarkRow | null
} => {
  const { resultRowList, scenarioList, previousBestRow = null } = inputs
  const { tableHeaderList, tableRowList } = buildBenchmarkTableRows({
    resultRowList,
    previousBestRow,
  })

  return {
    tableHeaderList,
    tableRowList,
    scenarioCount: scenarioList.length,
    resultRowList,
    previousBestRow,
  }
}

export { buildBenchmarkSummaryJson }

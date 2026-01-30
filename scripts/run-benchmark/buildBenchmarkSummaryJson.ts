import { buildBenchmarkTableRows } from "scripts/run-benchmark/buildBenchmarkTableRows"
import type { BenchmarkRow } from "types/run-benchmark/BenchmarkRow"
import type { Scenario } from "types/run-benchmark/Scenario"

/**
 * Build JSON summary output for benchmark results.
 */
const buildBenchmarkSummaryJson = (inputs: {
  resultRowList: BenchmarkRow[]
  scenarioList: Scenario[]
}): {
  tableHeaderList: string[]
  tableRowList: string[][]
  scenarioCount: number
} => {
  const { resultRowList, scenarioList } = inputs
  const { tableHeaderList, tableRowList } = buildBenchmarkTableRows({
    resultRowList,
  })

  return {
    tableHeaderList,
    tableRowList,
    scenarioCount: scenarioList.length,
  }
}

export { buildBenchmarkSummaryJson }

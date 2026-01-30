import type { BenchmarkRow } from "types/run-benchmark/BenchmarkRow"
import type { BenchmarkScenarioResult } from "types/run-benchmark/BenchmarkScenarioResult"

export type BenchmarkResult = {
  resultRowList: BenchmarkRow[]
  scenarioResultList: BenchmarkScenarioResult[]
}

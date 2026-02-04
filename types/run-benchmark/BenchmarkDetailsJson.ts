import type { SolverResult } from "types/run-benchmark/BenchmarkScenarioResult"
import type { SimpleRouteJson } from "types/run-benchmark/SimpleRouteJson"

export type BenchmarkDetailsJson = Record<
  string,
  {
    simpleRouteJson: SimpleRouteJson
    solverResults: Record<string, SolverResult>
  }
>

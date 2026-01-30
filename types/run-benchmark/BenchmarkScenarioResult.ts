export type SolverResult = {
  didSolve: boolean
  elapsedTimeMs: number
  relaxedDrcPassed: boolean
}

export type BenchmarkScenarioResult = {
  scenarioName: string
  simpleRouteJsonPath: string
  solverResultBySolverName: Record<string, SolverResult>
}

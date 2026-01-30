export type BenchmarkScenarioResult = {
  scenarioName: string
  simpleRouteJsonPath: string
  solverResultBySolverName: Record<
    string,
    {
      didSolve: boolean
      elapsedTimeMs: number
      relaxedDrcPassed: boolean
    }
  >
}

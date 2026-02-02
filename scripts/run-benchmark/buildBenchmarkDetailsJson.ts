import path from "node:path"
import type { BenchmarkScenarioResult } from "types/run-benchmark/BenchmarkScenarioResult"

/**
 * Build detailed JSON output keyed by scenario path.
 */
const buildBenchmarkDetailsJson = (inputs: {
  scenarioResultList: BenchmarkScenarioResult[]
}): Record<string, BenchmarkScenarioResult["solverResultBySolverName"]> => {
  const { scenarioResultList } = inputs
  const detailsByScenarioPath: Record<
    string,
    BenchmarkScenarioResult["solverResultBySolverName"]
  > = {}

  for (const scenarioResult of scenarioResultList) {
    const scenarioFileName = path.basename(scenarioResult.simpleRouteJsonPath)
    detailsByScenarioPath[scenarioFileName] =
      scenarioResult.solverResultBySolverName
  }

  return detailsByScenarioPath
}

export { buildBenchmarkDetailsJson }

import path from "node:path"
import type { BenchmarkDetailsJson } from "types/run-benchmark/BenchmarkDetailsJson"
import type { BenchmarkScenarioResult } from "types/run-benchmark/BenchmarkScenarioResult"
import type { Scenario } from "types/run-benchmark/Scenario"

/**
 * Build detailed JSON output keyed by scenario path.
 */
const buildBenchmarkDetailsJson = (inputs: {
  scenarioResultList: BenchmarkScenarioResult[]
  scenarioList: Scenario[]
}): BenchmarkDetailsJson => {
  const { scenarioResultList, scenarioList } = inputs
  const detailsByScenarioPath: BenchmarkDetailsJson = {}
  const simpleRouteJsonByScenarioPath = new Map(
    scenarioList.map((scenario) => [
      path.basename(scenario.simpleRouteJsonPath),
      scenario.simpleRouteJson,
    ]),
  )

  for (const scenarioResult of scenarioResultList) {
    const scenarioFileName = path.basename(scenarioResult.simpleRouteJsonPath)
    const simpleRouteJson = simpleRouteJsonByScenarioPath.get(scenarioFileName)
    if (!simpleRouteJson) {
      continue
    }

    detailsByScenarioPath[scenarioFileName] = {
      simpleRouteJson,
      solverResults: scenarioResult.solverResultBySolverName,
      circuitPreviewSvg: scenarioResult.circuitPreviewSvg,
    }
  }

  return detailsByScenarioPath
}

export { buildBenchmarkDetailsJson }

import { detectUnfixableRoutingIssues } from "scripts/run-benchmark/detectUnfixableRoutingIssues"
import { formatTimeSeconds } from "scripts/run-benchmark/formatTimeSeconds"
import { getPercentileMs } from "scripts/run-benchmark/getPercentileMs"
import { solverDisplayNameByConstructor } from "scripts/run-benchmark/solvers"
import type { BenchmarkResult } from "types/run-benchmark/BenchmarkResult"
import type { BenchmarkRow } from "types/run-benchmark/BenchmarkRow"
import type { BenchmarkScenarioResult } from "types/run-benchmark/BenchmarkScenarioResult"
import type { Scenario } from "types/run-benchmark/Scenario"
import type { SolverConstructor } from "types/run-benchmark/SolverConstructor"

/**
 * Run the benchmark across scenarios and solvers.
 */
const runBenchmark = (inputs: {
  scenarioList: Scenario[]
  solverConstructorList: SolverConstructor[]
}): BenchmarkResult => {
  const { scenarioList, solverConstructorList } = inputs
  const resultRowList: BenchmarkRow[] = []
  const scenarioResultList: BenchmarkScenarioResult[] = scenarioList.map(
    (scenario) => ({
      scenarioName: scenario.scenarioName,
      simpleRouteJsonPath: scenario.simpleRouteJsonPath,
      solverResultBySolverName: {},
    }),
  )

  for (const solverClass of solverConstructorList) {
    const solverDisplayName =
      solverDisplayNameByConstructor.get(solverClass) ?? solverClass.name
    let totalTimeMs = 0
    let successCount = 0
    let relaxedDrcPassedCount = 0
    const elapsedTimeMsList: number[] = []

    for (const [scenarioIndex, scenario] of scenarioList.entries()) {
      const solver = new solverClass(scenario.simpleRouteJson)
      const startMs = Date.now()
      solver.solve()
      const elapsedMs = Date.now() - startMs
      const connectionsCount = scenario.simpleRouteJson.connections?.length ?? 0
      totalTimeMs += elapsedMs
      elapsedTimeMsList.push(elapsedMs)

      const solved = solver.solved && !solver.failed
      if (solved) {
        successCount += 1
      }
      const scenarioStatus = solved ? "Solved" : "Failed"
      console.log(
        `[${solverDisplayName}] ${scenarioStatus} ${scenario.scenarioName} in ${formatTimeSeconds(elapsedMs)} (connections: ${connectionsCount})`,
      )

      const relaxedDrcPassed = detectUnfixableRoutingIssues()
      if (relaxedDrcPassed) {
        relaxedDrcPassedCount += 1
      }
      scenarioResultList[scenarioIndex].solverResultBySolverName[
        solverDisplayName
      ] = {
        didSolve: solved,
        elapsedTimeMs: elapsedMs,
        relaxedDrcPassed,
      }
    }

    const scenarioCount = scenarioList.length
    const successRatePercent =
      scenarioCount === 0 ? 0 : (successCount / scenarioCount) * 100
    const relaxedDrcRatePercent =
      relaxedDrcPassedCount === 0
        ? null
        : (relaxedDrcPassedCount / scenarioCount) * 100

    resultRowList.push({
      solverName: solverDisplayName,
      totalTimeMs,
      p50TimeMs: getPercentileMs(elapsedTimeMsList, 0.5),
      p95TimeMs: getPercentileMs(elapsedTimeMsList, 0.95),
      successRatePercent,
      relaxedDrcRatePercent,
    })
  }

  return { resultRowList, scenarioResultList }
}

export { runBenchmark }

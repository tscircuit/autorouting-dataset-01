import { detectUnfixableRoutingIssues } from "scripts/run-benchmark/detectUnfixableRoutingIssues"
import { getPercentileMs } from "scripts/run-benchmark/getPercentileMs"
import type { BenchmarkRow } from "types/run-benchmark/BenchmarkRow"
import type { Scenario } from "types/run-benchmark/Scenario"
import type { SolverConstructor } from "types/run-benchmark/SolverConstructor"

/**
 * Run the benchmark across scenarios and solvers.
 */
const runBenchmark = (inputs: {
  scenarioList: Scenario[]
  solverConstructorList: SolverConstructor[]
}): BenchmarkRow[] => {
  const { scenarioList, solverConstructorList } = inputs
  const resultRowList: BenchmarkRow[] = []

  for (const solverClass of solverConstructorList) {
    let totalTimeMs = 0
    let successCount = 0
    let relaxedDrcPassedCount = 0
    const elapsedTimeMsList: number[] = []

    for (const scenario of scenarioList) {
      const solver = new solverClass(scenario.simpleRouteJson)
      const startMs = Date.now()
      solver.solve()
      const elapsedMs = Date.now() - startMs
      totalTimeMs += elapsedMs
      elapsedTimeMsList.push(elapsedMs)

      const solved = solver.solved && !solver.failed
      if (solved) {
        successCount += 1
      }

      const relaxedDrcPassed = detectUnfixableRoutingIssues()
      if (relaxedDrcPassed) {
        relaxedDrcPassedCount += 1
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
      solverName: solverClass.name,
      totalTimeMs,
      p50TimeMs: getPercentileMs(elapsedTimeMsList, 0.5),
      p95TimeMs: getPercentileMs(elapsedTimeMsList, 0.95),
      successRatePercent,
      relaxedDrcRatePercent,
    })
  }

  return resultRowList
}

export { runBenchmark }

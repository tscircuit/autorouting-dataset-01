import { getSvgFromGraphicsObject } from "graphics-debug"
import { detectUnfixableRoutingIssues } from "lib/checks/detectUnfixableRoutingIssues"
import { convertToCircuteJson } from "lib/converter/srj-to-circuit-json"
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
const runBenchmark = async (inputs: {
  scenarioList: Scenario[]
  solverConstructorList: SolverConstructor[]
}): Promise<BenchmarkResult> => {
  const { scenarioList, solverConstructorList } = inputs
  const resultRowList: BenchmarkRow[] = []
  const scenarioResultList: BenchmarkScenarioResult[] = scenarioList.map(
    (scenario) => ({
      scenarioName: scenario.scenarioName,
      simpleRouteJsonPath: scenario.simpleRouteJsonPath,
      solverResultBySolverName: {},
      circuitPreviewSvg: "",
    }),
  )
  const totalRunCount = scenarioList.length * solverConstructorList.length
  let completedRunCount = 0
  let averageRunTimeMs = 0

  for (const solverClass of solverConstructorList) {
    const solverDisplayName =
      solverDisplayNameByConstructor.get(solverClass) ?? solverClass.name
    let totalTimeMs = 0
    let successCount = 0
    let relaxedDrcPassedCount = 0
    const elapsedTimeMsList: number[] = []

    for (const [scenarioIndex, scenario] of scenarioList.entries()) {
      const solver = new solverClass(scenario.simpleRouteJson)
      // Generate circuit preview SVG before running the solver
      const rawSvg = getSvgFromGraphicsObject(solver.visualize())
      scenarioResultList[scenarioIndex].circuitPreviewSvg = rawSvg
      const startMs = Date.now()
      try {
        solver.solve()
      } catch (_error) {
        solver.solved = false
      }
      const elapsedMs = Date.now() - startMs
      const connectionsCount = scenario.simpleRouteJson.connections?.length ?? 0
      totalTimeMs += elapsedMs
      const solved = solver.solved
      if (solved) {
        successCount += 1
        elapsedTimeMsList.push(elapsedMs)
      }
      const scenarioStatus = solved ? "Solved" : "Failed"
      console.log(
        `[${solverDisplayName}] ${scenarioStatus} ${scenario.scenarioName} in ${formatTimeSeconds(elapsedMs)} (connections: ${connectionsCount})`,
      )
      completedRunCount += 1
      averageRunTimeMs +=
        (elapsedMs - averageRunTimeMs) / Math.max(completedRunCount, 1)
      const remainingRunCount = Math.max(totalRunCount - completedRunCount, 0)
      const etaMs = Math.max(averageRunTimeMs * remainingRunCount, 0)
      const percentComplete =
        totalRunCount === 0 ? 100 : (completedRunCount / totalRunCount) * 100
      console.log(
        `[Progress] ${completedRunCount}/${totalRunCount} (${percentComplete.toFixed(1)}%) ETA ${formatTimeSeconds(etaMs)}`,
      )

      const circuitJson = convertToCircuteJson({
        srjWithPointPairs: solver.srjWithPointPairs! as any,
        minTraceWidth: scenario.simpleRouteJson.minTraceWidth,
        minViaDiameter: scenario.simpleRouteJson.minViaDiameter,
        routes: !solver.failed ? solver.getOutputSimplifiedPcbTraces() : [],
      })
      const relaxedDrcPassed = await detectUnfixableRoutingIssues(circuitJson)
      if (relaxedDrcPassed && solver.solved) {
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

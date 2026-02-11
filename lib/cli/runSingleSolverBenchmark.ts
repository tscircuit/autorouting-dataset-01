import { getSvgFromGraphicsObject } from "graphics-debug"
import { detectUnfixableRoutingIssues } from "lib/checks/detectUnfixableRoutingIssues"
import { convertToCircuteJson } from "lib/converter/srj-to-circuit-json"
import { formatTimeSeconds } from "scripts/run-benchmark/formatTimeSeconds"
import { getPercentileMs } from "scripts/run-benchmark/getPercentileMs"
import type { BenchmarkResult } from "types/run-benchmark/BenchmarkResult"
import type { BenchmarkRow } from "types/run-benchmark/BenchmarkRow"
import type { BenchmarkScenarioResult } from "types/run-benchmark/BenchmarkScenarioResult"
import type { Scenario } from "types/run-benchmark/Scenario"
import type { SolverConstructor } from "types/run-benchmark/SolverConstructor"

/**
 * Run the benchmark for a single user-provided solver.
 */
const runSingleSolverBenchmark = async (inputs: {
  scenarioList: Scenario[]
  solverConstructor: SolverConstructor
  solverName: string
}): Promise<BenchmarkResult> => {
  const { scenarioList, solverConstructor, solverName } = inputs
  const resultRowList: BenchmarkRow[] = []
  const scenarioResultList: BenchmarkScenarioResult[] = scenarioList.map(
    (scenario) => ({
      scenarioName: scenario.scenarioName,
      simpleRouteJsonPath: scenario.simpleRouteJsonPath,
      solverResultBySolverName: {},
      circuitPreviewSvg: "",
    }),
  )

  let totalTimeMs = 0
  let successCount = 0
  let relaxedDrcPassedCount = 0
  const elapsedTimeMsList: number[] = []

  for (const [scenarioIndex, scenario] of scenarioList.entries()) {
    let solver: ReturnType<typeof createSolver>
    let solverCreationError: Error | null = null

    function createSolver() {
      return new solverConstructor(scenario.simpleRouteJson)
    }

    try {
      solver = createSolver()
    } catch (error) {
      solverCreationError = error as Error
      console.log(
        `[${solverName}] Failed to create solver for ${scenario.scenarioName}: ${solverCreationError.message}`,
      )
      scenarioResultList[scenarioIndex].solverResultBySolverName[solverName] = {
        didSolve: false,
        elapsedTimeMs: 0,
        relaxedDrcPassed: false,
      }
      continue
    }

    // Generate circuit preview SVG before running the solver
    try {
      const rawSvg = getSvgFromGraphicsObject(solver.visualize())
      scenarioResultList[scenarioIndex].circuitPreviewSvg = rawSvg
    } catch {
      // Visualize may not be implemented
    }

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
      `[${solverName}] ${scenarioStatus} ${scenario.scenarioName} in ${formatTimeSeconds(elapsedMs)} (connections: ${connectionsCount})`,
    )

    const percentComplete = ((scenarioIndex + 1) / scenarioList.length) * 100
    console.log(
      `[Progress] ${scenarioIndex + 1}/${scenarioList.length} (${percentComplete.toFixed(1)}%)`,
    )

    let relaxedDrcPassed = false
    try {
      const circuitJson = convertToCircuteJson({
        srjWithPointPairs: solver.srjWithPointPairs! as any,
        minTraceWidth: scenario.simpleRouteJson.minTraceWidth,
        minViaDiameter: scenario.simpleRouteJson.minViaDiameter,
        routes: !solver.failed ? solver.getOutputSimplifiedPcbTraces() : [],
      })
      relaxedDrcPassed = await detectUnfixableRoutingIssues(circuitJson)
    } catch {
      // DRC check may fail
    }

    if (relaxedDrcPassed && solver.solved) {
      relaxedDrcPassedCount += 1
    }

    scenarioResultList[scenarioIndex].solverResultBySolverName[solverName] = {
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
    solverName,
    totalTimeMs,
    p50TimeMs: getPercentileMs(elapsedTimeMsList, 0.5),
    p95TimeMs: getPercentileMs(elapsedTimeMsList, 0.95),
    successRatePercent,
    relaxedDrcRatePercent,
  })

  return { resultRowList, scenarioResultList }
}

export { runSingleSolverBenchmark }

import { availableParallelism, cpus } from "node:os"
import { getSvgFromGraphicsObject } from "graphics-debug"
import { detectUnfixableRoutingIssues } from "lib/checks/detectUnfixableRoutingIssues"
import { convertToCircuitJson } from "lib/converter/srj-to-circuit-json"
import { formatTimeSeconds } from "scripts/run-benchmark/formatTimeSeconds"
import { getPercentileMs } from "scripts/run-benchmark/getPercentileMs"
import { solverDisplayNameByConstructor } from "scripts/run-benchmark/solvers"
import type { BenchmarkResult } from "types/run-benchmark/BenchmarkResult"
import type { BenchmarkRow } from "types/run-benchmark/BenchmarkRow"
import type { BenchmarkScenarioResult } from "types/run-benchmark/BenchmarkScenarioResult"
import type { Scenario } from "types/run-benchmark/Scenario"
import type { SolverConstructor } from "types/run-benchmark/SolverConstructor"

type ScenarioRunResult = {
  elapsedMs: number
  solved: boolean
  relaxedDrcPassed: boolean
}

const getDefaultConcurrency = (totalRunCount: number): number => {
  const detectedParallelism =
    typeof availableParallelism === "function"
      ? availableParallelism()
      : cpus().length

  return Math.max(1, Math.min(detectedParallelism || 1, totalRunCount || 1))
}

const runWithConcurrency = async <TInput, TOutput>(inputs: {
  itemList: TInput[]
  concurrency: number
  worker: (item: TInput) => Promise<TOutput>
}): Promise<TOutput[]> => {
  const { itemList, concurrency, worker } = inputs
  const resultList: TOutput[] = new Array(itemList.length)
  let nextIndex = 0

  const workerCount = Math.min(concurrency, itemList.length)
  await Promise.all(
    Array.from({ length: workerCount }, async () => {
      while (nextIndex < itemList.length) {
        const itemIndex = nextIndex
        nextIndex += 1
        resultList[itemIndex] = await worker(itemList[itemIndex])
      }
    }),
  )

  return resultList
}

/**
 * Run the benchmark across scenarios and solvers.
 */
const runBenchmark = async (inputs: {
  scenarioList: Scenario[]
  solverConstructorList: SolverConstructor[]
  concurrency?: number
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
  const requestedConcurrency =
    inputs.concurrency !== undefined && Number.isFinite(inputs.concurrency)
      ? Math.floor(inputs.concurrency)
      : getDefaultConcurrency(totalRunCount)
  const concurrency = Math.max(
    1,
    Math.min(requestedConcurrency, totalRunCount || 1),
  )

  console.log(`Running up to ${concurrency} benchmark jobs in parallel.`)

  for (const solverClass of solverConstructorList) {
    const solverDisplayName =
      solverDisplayNameByConstructor.get(solverClass) ?? solverClass.name

    const scenarioRunResultList = await runWithConcurrency({
      itemList: scenarioList.map((scenario, scenarioIndex) => ({
        scenario,
        scenarioIndex,
      })),
      concurrency,
      worker: async ({
        scenario,
        scenarioIndex,
      }): Promise<ScenarioRunResult> => {
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
        const connectionsCount =
          scenario.simpleRouteJson.connections?.length ?? 0
        const solved = solver.solved
        const scenarioStatus = solved ? "Solved" : "Failed"
        console.log(
          `[${solverDisplayName}] ${scenarioStatus} ${scenario.scenarioName} in ${formatTimeSeconds(elapsedMs)} (connections: ${connectionsCount})`,
        )

        const circuitJson = convertToCircuitJson({
          srjWithPointPairs: solver.srjWithPointPairs! as any,
          minTraceWidth: scenario.simpleRouteJson.minTraceWidth,
          minViaDiameter: scenario.simpleRouteJson.minViaDiameter,
          routes: !solver.failed ? solver.getOutputSimplifiedPcbTraces() : [],
        })
        const relaxedDrcPassed = await detectUnfixableRoutingIssues(circuitJson)
        scenarioResultList[scenarioIndex].solverResultBySolverName[
          solverDisplayName
        ] = {
          didSolve: solved,
          elapsedTimeMs: elapsedMs,
          relaxedDrcPassed,
        }

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

        return { elapsedMs, solved, relaxedDrcPassed }
      },
    })

    const totalTimeMs = scenarioRunResultList.reduce(
      (sum, result) => sum + result.elapsedMs,
      0,
    )
    const successCount = scenarioRunResultList.filter(
      (result) => result.solved,
    ).length
    const relaxedDrcPassedCount = scenarioRunResultList.filter(
      (result) => result.solved && result.relaxedDrcPassed,
    ).length
    const elapsedTimeMsList = scenarioRunResultList
      .filter((result) => result.solved)
      .map((result) => result.elapsedMs)

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

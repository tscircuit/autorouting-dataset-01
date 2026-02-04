import type { SolverResult } from "types/run-benchmark/BenchmarkScenarioResult"

/**
 * Generates an HTML card displaying solver result details.
 */
export const generateSolverResultCard = (inputs: {
  solver_name: string
  solver_result: SolverResult
  scenario_path: string
}) => {
  const { solver_name, solver_result, scenario_path } = inputs

  const status_class = solver_result.didSolve
    ? "text-green-400"
    : "text-red-400"
  const status_text = solver_result.didSolve ? "✓ Solved" : "✗ Failed"
  const drc_class = solver_result.relaxedDrcPassed
    ? "text-green-400"
    : "text-yellow-400"
  const drc_text = solver_result.relaxedDrcPassed ? "✓ Passed" : "⚠ Failed"

  return `<div class="bg-gray-50 rounded-lg p-4 border border-gray-300">
    <h4 class="font-semibold text-blue-800 mb-2">${solver_name}</h4>
    <div class="space-y-1 text-sm">
        <div class="flex justify-between">
            <span class="text-gray-600">Status:</span>
            <span class="${status_class} font-medium">${status_text}</span>
        </div>
        <div class="flex justify-between">
            <span class="text-gray-600">Time:</span>
            <span class="text-gray-800">${solver_result.elapsedTimeMs.toFixed(2)}ms</span>
        </div>
        <div class="flex justify-between">
            <span class="text-gray-600">DRC:</span>
            <span class="${drc_class} font-medium">${drc_text}</span>
        </div>
    </div>
    <button
        type="button"
        class="js-open-debugger mt-3 w-full rounded-md border border-blue-600 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700 transition hover:bg-blue-100"
        data-scenario="${scenario_path}"
        data-solver="${solver_name}"
    >
        Open Debugger
    </button>
</div>`
}

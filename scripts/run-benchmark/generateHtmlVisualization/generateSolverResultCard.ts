import type { SolverResult } from "types/run-benchmark/BenchmarkScenarioResult"

/**
 * Generates an HTML card displaying solver result details.
 */
export const generateSolverResultCard = (inputs: {
  solver_name: string
  solver_result: SolverResult
}) => {
  const { solver_name, solver_result } = inputs

  const status_class = solver_result.didSolve
    ? "text-green-400"
    : "text-red-400"
  const status_text = solver_result.didSolve ? "✓ Solved" : "✗ Failed"
  const drc_class = solver_result.relaxedDrcPassed
    ? "text-green-400"
    : "text-yellow-400"
  const drc_text = solver_result.relaxedDrcPassed ? "✓ Passed" : "⚠ Failed"

  return `<div class="bg-gray-900 rounded-lg p-4 border border-gray-600">
    <h4 class="font-semibold text-blue-200 mb-2">${solver_name}</h4>
    <div class="space-y-1 text-sm">
        <div class="flex justify-between">
            <span class="text-gray-400">Status:</span>
            <span class="${status_class} font-medium">${status_text}</span>
        </div>
        <div class="flex justify-between">
            <span class="text-gray-400">Time:</span>
            <span class="text-gray-200">${solver_result.elapsedTimeMs.toFixed(2)}ms</span>
        </div>
        <div class="flex justify-between">
            <span class="text-gray-400">DRC:</span>
            <span class="${drc_class} font-medium">${drc_text}</span>
        </div>
    </div>
</div>`
}

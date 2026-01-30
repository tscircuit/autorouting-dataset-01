import { generateSolverResultCard } from "scripts/run-benchmark/generateHtmlVisualization/generateSolverResultCard"
import type { SolverResult } from "types/run-benchmark/BenchmarkScenarioResult"

/**
 * Generates an expandable card for a single scenario with solver results.
 */
export const generateScenarioCard = (inputs: {
  scenario_path: string
  solver_results: Record<string, SolverResult>
}) => {
  const { scenario_path, solver_results } = inputs

  const solver_cards_html = Object.entries(solver_results)
    .map(([solver_name, solver_result]) =>
      generateSolverResultCard({ solver_name, solver_result }),
    )
    .join("")

  return `<details class="bg-gray-800 rounded-lg border border-gray-700">
    <summary class="px-6 py-4 cursor-pointer hover:bg-gray-750 transition-colors font-medium text-blue-300">
        ${scenario_path}
    </summary>
    <div class="px-6 py-4 border-t border-gray-700">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${solver_cards_html}
        </div>
    </div>
</details>`
}

import { generateScenarioCard } from "scripts/run-benchmark/generateHtmlVisualization/generateScenarioCard"
import type { SolverResult } from "types/run-benchmark/BenchmarkScenarioResult"

/**
 * Generates the scenario details section with expandable scenario cards.
 */
export const generateScenarioDetails = (
  detail_json: Record<string, Record<string, SolverResult>>,
) => {
  const scenarios_html = Object.entries(detail_json)
    .map(([scenario_path, solver_results]) =>
      generateScenarioCard({ scenario_path, solver_results }),
    )
    .join("")

  return `<section class="mb-8">
    <h2 class="text-2xl font-semibold text-blue-300 mb-4">Scenario Details</h2>
    <div class="space-y-4">${scenarios_html}</div>
</section>`
}

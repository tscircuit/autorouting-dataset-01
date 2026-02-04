import { generateScenarioCard } from "scripts/run-benchmark/generateHtmlVisualization/generateScenarioCard"
import type { BenchmarkDetailsJson } from "types/run-benchmark/BenchmarkDetailsJson"

/**
 * Generates the scenario details section with expandable scenario cards.
 */
export const generateScenarioDetails = (detail_json: BenchmarkDetailsJson) => {
  const scenarios_html = Object.entries(detail_json)
    .map(([scenario_path, scenario_detail]) =>
      generateScenarioCard({
        scenario_path,
        solver_results: scenario_detail.solverResults,
      }),
    )
    .join("")

  return `<section class="mb-8">
    <h2 class="text-2xl font-semibold text-blue-700 mb-4">Scenario Details</h2>
    <div class="space-y-4">${scenarios_html}</div>
</section>`
}

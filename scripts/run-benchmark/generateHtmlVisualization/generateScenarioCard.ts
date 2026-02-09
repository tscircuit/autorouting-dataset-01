import { generateSolverResultCard } from "scripts/run-benchmark/generateHtmlVisualization/generateSolverResultCard"
import type { SolverResult } from "types/run-benchmark/BenchmarkScenarioResult"

/**
 * Generates an expandable card for a single scenario with solver results.
 */
export const generateScenarioCard = (inputs: {
  scenario_path: string
  solver_results: Record<string, SolverResult>
  circuit_preview_svg?: string
}) => {
  const { scenario_path, solver_results, circuit_preview_svg } = inputs

  const solver_preview_html = Object.entries(solver_results)
    .map(([solver_name, solver_result]) => {
      const badge_class = solver_result.didSolve
        ? "bg-emerald-100 text-emerald-700 border-emerald-200"
        : "bg-rose-100 text-rose-700 border-rose-200"
      const status_text = solver_result.didSolve ? "Solved" : "Failed"
      return `<span title="${solver_name}" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-medium ${badge_class}">
        <span class="font-semibold">${solver_name}</span>
        <span class="opacity-75">${status_text}</span>
      </span>`
    })
    .join("")

  const solver_tag_list = Object.entries(solver_results).map(
    ([solver_name, solver_result]) =>
      `solver:${solver_name}:${solver_result.didSolve ? "pass" : "fail"}`,
  )

  const solver_cards_html = Object.entries(solver_results)
    .map(([solver_name, solver_result]) =>
      generateSolverResultCard({
        solver_name,
        solver_result,
        scenario_path,
      }),
    )
    .join("")

  // Generate circuit preview section if SVG is available
  const circuit_preview_section = circuit_preview_svg
    ? `<div class="px-6 py-4 border-t border-gray-200 bg-white">
        <h4 class="text-sm font-semibold text-slate-800 mb-3">Circuit Preview</h4>
        <div class="bg-slate-50 rounded-lg border border-slate-200 p-4 flex items-center justify-center overflow-auto">
          ${circuit_preview_svg}
        </div>
      </div>`
    : ""

  return `<details class="js-scenario-card bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow" data-tags="${solver_tag_list.join(" ")}">
    <summary class="px-6 py-4 cursor-pointer hover:bg-slate-50 transition-colors">
        <div class="flex items-start justify-between gap-4">
          <span class="font-mono text-sm text-slate-700 break-all pt-1">${scenario_path}</span>
          <span class="flex flex-wrap items-center gap-2 shrink-0">${solver_preview_html}</span>
        </div>
    </summary>
    ${circuit_preview_section}
    <div class="px-6 py-4 border-t border-gray-200 bg-slate-50">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${solver_cards_html}
        </div>
    </div>
</details>`
}

import { generateScenarioCard } from "scripts/run-benchmark/generateHtmlVisualization/generateScenarioCard"
import type { BenchmarkDetailsJson } from "types/run-benchmark/BenchmarkDetailsJson"

/**
 * Generates the scenario details section with expandable scenario cards.
 */
export const generateScenarioDetails = (detail_json: BenchmarkDetailsJson) => {
  const solver_name_list = Array.from(
    new Set(
      Object.values(detail_json).flatMap((scenario_detail) =>
        Object.keys(scenario_detail.solverResults),
      ),
    ),
  )

  const tag_filter_html = solver_name_list
    .map((solver_name) => {
      const pass_tag = `solver:${solver_name}:pass`
      const fail_tag = `solver:${solver_name}:fail`
      return `<div class="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
        <span class="text-sm font-medium text-slate-700">${solver_name}:</span>
        <button type="button" class="js-scenario-tag js-pass-tag inline-flex items-center gap-1.5 rounded-md border border-blue-300 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 transition hover:bg-blue-100 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1" data-tag="${pass_tag}" data-label="${solver_name} solved">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
          <span>Solved</span>
        </button>
        <button type="button" class="js-scenario-tag js-fail-tag inline-flex items-center gap-1.5 rounded-md border border-rose-300 bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700 transition hover:bg-rose-100 hover:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-1" data-tag="${fail_tag}" data-label="${solver_name} failed">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
          <span>Failed</span>
        </button>
      </div>`
    })
    .join("")

  const scenarios_html = Object.entries(detail_json)
    .map(([scenario_path, scenario_detail]) =>
      generateScenarioCard({
        scenario_path,
        solver_results: scenario_detail.solverResults,
      }),
    )
    .join("")

  return `<section class="mb-8">
    <h2 class="text-2xl font-bold text-slate-800 mb-4">Scenario Details</h2>
    <div class="mb-6 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm">
      <div class="flex flex-wrap items-center gap-3 mb-4">
        <h3 class="text-sm font-semibold text-slate-900">Filter by Status</h3>
        <button type="button" class="js-clear-scenario-tags inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-1">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          <span>Clear All</span>
        </button>
        <div class="flex-1"></div>
        <div class="text-xs text-slate-600">
          <span class="font-medium">Active filters:</span> 
          <span class="js-scenario-tag-summary font-mono text-slate-800">None</span>
        </div>
      </div>
      <div class="flex flex-wrap gap-3">
        ${tag_filter_html}
      </div>
      <div class="mt-4 pt-4 border-t border-slate-200">
        <div class="flex items-start gap-2 text-xs text-slate-600">
          <svg class="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <p><span class="font-medium">Regression detection:</span> Select "Solved" for one solver and "Failed" for another to identify scenarios that regressed between versions.</p>
        </div>
      </div>
    </div>
    <div class="space-y-3">${scenarios_html}</div>
    <script>
      (() => {
        const tagButtonList = Array.from(document.querySelectorAll(".js-scenario-tag"))
        const scenarioCardList = Array.from(document.querySelectorAll(".js-scenario-card"))
        const summaryEl = document.querySelector(".js-scenario-tag-summary")
        const clearBtn = document.querySelector(".js-clear-scenario-tags")

        const getActiveTagList = () =>
          tagButtonList
            .filter((button) => button.getAttribute("data-selected") === "true")
            .map((button) => button.getAttribute("data-tag"))
            .filter(Boolean)

        const updateSummary = (active_tag_list) => {
          if (!summaryEl) return
          if (!active_tag_list.length) {
            summaryEl.textContent = "None"
            return
          }
          const label_list = active_tag_list
            .map((tag) =>
              tagButtonList.find((button) => button.getAttribute("data-tag") === tag),
            )
            .map((button) => button?.getAttribute("data-label"))
            .filter(Boolean)
          summaryEl.textContent = label_list.join(", ")
        }

        const applyFilter = () => {
          const active_tag_list = getActiveTagList()
          updateSummary(active_tag_list)
          scenarioCardList.forEach((card) => {
            const tag_list = (card.getAttribute("data-tags") ?? "")
              .split(" ")
              .filter(Boolean)
            const is_match = active_tag_list.every((tag) => tag_list.includes(tag))
            card.classList.toggle("hidden", !is_match)
          })
        }

        tagButtonList.forEach((button) => {
          button.addEventListener("click", () => {
            const is_selected = button.getAttribute("data-selected") === "true"
            const is_pass_tag = button.classList.contains("js-pass-tag")
            
            button.setAttribute("data-selected", is_selected ? "false" : "true")
            
            if (!is_selected) {
              // When selecting, change to green
              button.classList.add("ring-2", "ring-green-500", "ring-offset-2", "shadow-sm", "scale-105")
              button.classList.remove("border-blue-300", "bg-blue-50", "text-blue-700", "border-rose-300", "bg-rose-50", "text-rose-700")
              button.classList.add("border-green-500", "bg-green-100", "text-green-800")
            } else {
              // When deselecting, restore original color
              button.classList.remove("ring-2", "ring-green-500", "ring-offset-2", "shadow-sm", "scale-105", "border-green-500", "bg-green-100", "text-green-800")
              if (is_pass_tag) {
                button.classList.add("border-blue-300", "bg-blue-50", "text-blue-700")
              } else {
                button.classList.add("border-rose-300", "bg-rose-50", "text-rose-700")
              }
            }
            
            applyFilter()
          })
        })

        if (clearBtn) {
          clearBtn.addEventListener("click", () => {
            tagButtonList.forEach((button) => {
              const is_pass_tag = button.classList.contains("js-pass-tag")
              
              button.setAttribute("data-selected", "false")
              button.classList.remove("ring-2", "ring-green-500", "ring-offset-2", "shadow-sm", "scale-105", "border-green-500", "bg-green-100", "text-green-800")
              
              if (is_pass_tag) {
                button.classList.add("border-blue-300", "bg-blue-50", "text-blue-700")
              } else {
                button.classList.add("border-rose-300", "bg-rose-50", "text-rose-700")
              }
            })
            applyFilter()
          })
        }

        applyFilter()
      })()
    </script>
</section>`
}

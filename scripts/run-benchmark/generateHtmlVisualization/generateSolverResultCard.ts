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

  const status_badge_class = solver_result.didSolve
    ? "bg-emerald-100 text-emerald-700 border-emerald-200"
    : "bg-rose-100 text-rose-700 border-rose-200"
  const status_text = solver_result.didSolve ? "Solved" : "Failed"
  const status_icon = solver_result.didSolve
    ? `<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>`
    : `<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>`

  const drc_badge_class = solver_result.relaxedDrcPassed
    ? "bg-emerald-100 text-emerald-700 border-emerald-200"
    : "bg-amber-100 text-amber-700 border-amber-200"
  const drc_text = solver_result.relaxedDrcPassed ? "Passed" : "Failed"
  const drc_icon = solver_result.relaxedDrcPassed
    ? `<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>`
    : `<svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`

  return `<div class="bg-white rounded-lg p-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
    <h4 class="font-semibold text-slate-900 mb-3 text-base">${solver_name}</h4>
    <div class="space-y-2.5 text-sm">
        <div class="flex justify-between items-center">
            <span class="text-slate-600 font-medium">Status</span>
            <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-xs font-medium ${status_badge_class}">
              ${status_icon}
              <span>${status_text}</span>
            </span>
        </div>
        <div class="flex justify-between items-center">
            <span class="text-slate-600 font-medium">Time</span>
            <span class="font-mono text-slate-900 font-semibold">${solver_result.elapsedTimeMs.toFixed(2)}<span class="text-slate-500 font-normal text-xs ml-0.5">ms</span></span>
        </div>
        <div class="flex justify-between items-center">
            <span class="text-slate-600 font-medium">DRC</span>
            <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-xs font-medium ${drc_badge_class}">
              ${drc_icon}
              <span>${drc_text}</span>
            </span>
        </div>
    </div>
    <button
        type="button"
        class="js-open-debugger mt-4 w-full inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
        data-scenario="${scenario_path}"
        data-solver="${solver_name}"
    >
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
        <span>Open Debugger</span>
    </button>
</div>`
}

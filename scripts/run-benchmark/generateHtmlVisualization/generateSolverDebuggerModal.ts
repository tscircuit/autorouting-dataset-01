/**
 * Generates the modal container for the solver debugger React app.
 */
export const generateSolverDebuggerModal = () => {
  return `<div id="solver-debugger-modal" class="fixed inset-0 z-50 flex hidden items-center justify-center bg-black/50 p-4">
    <div class="w-full max-w-6xl overflow-hidden rounded-lg border border-gray-300 bg-white shadow-2xl">
        <div class="flex items-center justify-between border-b border-gray-300 px-4 py-3">
            <h3 id="solver-debugger-title" class="text-sm font-semibold text-blue-800 md:text-base"></h3>
            <button
                id="solver-debugger-close"
                type="button"
                class="rounded border border-gray-400 px-3 py-1 text-sm text-gray-700 transition hover:border-gray-500 hover:text-gray-900"
            >
                Close
            </button>
        </div>
        <div id="solver-debugger-root" class="h-[75vh] overflow-auto"></div>
    </div>
</div>`
}

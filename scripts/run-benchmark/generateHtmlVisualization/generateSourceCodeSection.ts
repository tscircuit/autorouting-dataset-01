export interface AutorouterSource {
  filename: string
  code: string
  version: string
  gitHash: string
  solverName: string
  packageName?: string
}

/**
 * Escapes HTML special characters to prevent XSS and display issues.
 */
const escapeHtml = (text: string): string => {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

/**
 * Generates the source code viewer section for the HTML visualization.
 * Shows the autorouter source code (from package or entry file).
 */
export const generateSourceCodeSection = (
  source: AutorouterSource | undefined,
): string => {
  if (!source) {
    return ""
  }

  const versionInfo =
    source.version !== "unknown"
      ? `v${source.version}${source.gitHash ? ` (${source.gitHash})` : ""}`
      : source.gitHash
        ? `git: ${source.gitHash}`
        : ""

  const lineCount = source.code.split("\n").length

  return `
    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-blue-700 mb-4">Autorouter Source Code</h2>
      <benchmark-card>
        <div class="mb-4 flex items-center justify-between">
          <div>
            <span class="font-mono text-sm bg-slate-100 px-2 py-1 rounded">${escapeHtml(source.filename)}</span>
            ${versionInfo ? `<span class="ml-2 text-sm text-slate-500">${escapeHtml(versionInfo)}</span>` : ""}
            ${source.packageName ? `<span class="ml-2 text-sm text-blue-600">${escapeHtml(source.packageName)}</span>` : ""}
          </div>
          <div class="flex gap-2">
            <button
              onclick="toggleSourceCode()"
              id="toggle-source-btn"
              class="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
            >
              Show Code
            </button>
            <button
              onclick="copySourceCode()"
              class="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded hover:bg-slate-200 transition-colors"
            >
              Copy
            </button>
          </div>
        </div>
        <div id="source-code-container" class="hidden">
          <pre class="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed max-h-[600px] overflow-y-auto"><code id="source-code">${escapeHtml(source.code)}</code></pre>
        </div>
        <div id="source-code-collapsed" class="text-sm text-slate-500">
          <p>Solver: <span class="font-semibold">${escapeHtml(source.solverName)}</span></p>
          <p class="mt-1">${lineCount.toLocaleString()} lines of code</p>
        </div>
      </benchmark-card>
    </section>

    <script>
      function toggleSourceCode() {
        const container = document.getElementById('source-code-container');
        const collapsed = document.getElementById('source-code-collapsed');
        const btn = document.getElementById('toggle-source-btn');

        if (container.classList.contains('hidden')) {
          container.classList.remove('hidden');
          collapsed.classList.add('hidden');
          btn.textContent = 'Hide Code';
        } else {
          container.classList.add('hidden');
          collapsed.classList.remove('hidden');
          btn.textContent = 'Show Code';
        }
      }

      function copySourceCode() {
        const code = document.getElementById('source-code').textContent;
        navigator.clipboard.writeText(code).then(() => {
          const btn = event.target;
          const originalText = btn.textContent;
          btn.textContent = 'Copied!';
          btn.classList.add('bg-green-100', 'text-green-700');
          btn.classList.remove('bg-slate-100', 'text-slate-700');
          setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('bg-green-100', 'text-green-700');
            btn.classList.add('bg-slate-100', 'text-slate-700');
          }, 2000);
        });
      }
    </script>
  `
}

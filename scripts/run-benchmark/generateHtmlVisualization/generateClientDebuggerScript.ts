import type { BenchmarkDetailsJson } from "types/run-benchmark/BenchmarkDetailsJson"

const escapeJsonForHtml = (json: string) => json.replace(/</g, "\\u003c")

/**
 * Generates the client-side React debugger bootstrapping script.
 */
export const generateClientDebuggerScript = (
  detail_json: BenchmarkDetailsJson,
  bundle_filename?: string,
  solverName?: string,
) => {
  const detail_json_text = escapeJsonForHtml(JSON.stringify(detail_json))

  const svgsonShim = encodeURIComponent(
    [
      "import * as m from 'https://esm.sh/svgson@5.2.1?target=es2022';",
      "const stringify = m.stringify ?? m.stringifySync ?? (m.default && (m.default.stringify || m.default.stringifySync));",
      "export { stringify };",
      "export * from 'https://esm.sh/svgson@5.2.1?target=es2022';",
    ].join(""),
  )

  // Import solver from bundle file or fall back to esm.sh
  const solverImport = bundle_filename
    ? `import SolverConstructor, { solverName as bundledSolverName } from "./${bundle_filename}";
    const solverConstructors = SolverConstructor ? { [bundledSolverName || "${solverName || "Autorouter"}"]: SolverConstructor } : {};`
    : `import { AutoroutingPipeline1_OriginalUnravel, AutoroutingPipelineSolver as AutoroutingPipelineSolver2_PortPointPathing } from "https://esm.sh/@tscircuit/capacity-autorouter@latest";
    const solverConstructors = {
      AutoroutingPipelineSolver2_PortPointPathing,
      AutoroutingPipeline1_OriginalUnravel
    };`

  return `<script>
    window.__benchmark_details = ${detail_json_text};
</script>
<script type="importmap">
  {
    "imports": {
      "react": "https://esm.sh/react@18",
      "react/jsx-runtime": "https://esm.sh/react@18/jsx-runtime",
      "react/jsx-dev-runtime": "https://esm.sh/react@18/jsx-dev-runtime",
      "react-dom": "https://esm.sh/react-dom@18",
      "react-dom/client": "https://esm.sh/react-dom@18/client",
      "scheduler": "https://esm.sh/scheduler@0.23.0",
      "svgson": "data:text/javascript,${svgsonShim}"
    }
  }
</script>
<script type="module">
    import React, { useMemo } from "react";
    import { createRoot } from "react-dom/client";
    import { GenericSolverDebugger } from "https://esm.sh/@tscircuit/solver-utils@latest/react?external=react,react-dom,svgson";

    ${solverImport}

    const modal = document.getElementById("solver-debugger-modal");
    const modalTitle = document.getElementById("solver-debugger-title");
    const rootEl = document.getElementById("solver-debugger-root");
    const closeBtn = document.getElementById("solver-debugger-close");
    let root = null;

    const closeModal = () => {
      if (!modal) return;
      modal.classList.add("hidden");
      if (root) {
        root.unmount();
        root = null;
      }
      if (rootEl) {
        rootEl.innerHTML = "";
      }
    };

    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
    }

    if (modal) {
      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          closeModal();
        }
      });
    }

    const DebuggerApp = ({ scenarioKey, solverName }) => {
      const detail = window.__benchmark_details?.[scenarioKey];
      const solverCtor = solverConstructors[solverName];
      const solver = useMemo(() => {
        if (!detail || !solverCtor) return null;
        return new solverCtor(detail.simpleRouteJson);
      }, [scenarioKey, solverName]);

      if (!detail) {
        return React.createElement(
          "div",
          { className: "p-4 text-sm text-red-700" },
          "Scenario data not found."
        );
      }

      if (!solverCtor) {
        return React.createElement(
          "div",
          { className: "p-4 text-sm text-red-700" },
          "Solver not available in this build."
        );
      }

      return React.createElement(GenericSolverDebugger, { solver });
    };

    const openDebugger = (scenarioKey, solverName) => {
      if (!modal || !rootEl) return;
      if (modalTitle) {
        modalTitle.textContent = \`\${scenarioKey} • \${solverName}\`;
      }
      modal.classList.remove("hidden");
      if (!root) {
        root = createRoot(rootEl);
      }
      root.render(
        React.createElement(DebuggerApp, {
          scenarioKey,
          solverName,
          key: scenarioKey + "::" + solverName,
        })
      );
    };

    document.querySelectorAll(".js-open-debugger").forEach((button) => {
      button.addEventListener("click", () => {
        const scenarioKey = button.getAttribute("data-scenario");
        const solverName = button.getAttribute("data-solver");
        if (scenarioKey && solverName) {
          openDebugger(scenarioKey, solverName);
        }
      });
    });
</script>`
}

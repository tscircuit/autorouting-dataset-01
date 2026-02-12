import path from "node:path"

/**
 * Bundles the autorouter file and its dependencies into a single browser-compatible ES module.
 * The bundle exports the solver constructor for use by the debugger.
 */
export const bundleAutorouter = async (
  autorouterPath: string,
  solverName: string,
): Promise<string> => {
  // Create a wrapper entry that exports the solver as an ES module
  const wrapperCode = `
import * as AutorouterModule from "${autorouterPath}";

// Find the solver constructor
const solverName = "${solverName}";
let SolverConstructor = null;

// Check direct export by name
if (AutorouterModule[solverName]) {
  SolverConstructor = AutorouterModule[solverName];
}
// Check default export
else if (AutorouterModule.default) {
  SolverConstructor = AutorouterModule.default;
}

// Check SOLVER_CONSTRUCTOR_LIST array
if (!SolverConstructor && AutorouterModule.SOLVER_CONSTRUCTOR_LIST) {
  for (const ctor of AutorouterModule.SOLVER_CONSTRUCTOR_LIST) {
    if (ctor.name === solverName) {
      SolverConstructor = ctor;
      break;
    }
  }
}

// Check solverDisplayNameByConstructor map (reverse lookup)
if (!SolverConstructor && AutorouterModule.solverDisplayNameByConstructor) {
  for (const [ctor, displayName] of AutorouterModule.solverDisplayNameByConstructor) {
    if (displayName === solverName) {
      SolverConstructor = ctor;
      break;
    }
  }
}

// Fallback: check if any export looks like a solver class
if (!SolverConstructor) {
  for (const [key, value] of Object.entries(AutorouterModule)) {
    if (typeof value === 'function' && value.prototype && key.includes('Pipeline')) {
      SolverConstructor = value;
      break;
    }
  }
}

// Export as ES module
export { SolverConstructor, solverName };
export default SolverConstructor;
`

  // Write wrapper to temp file
  const tempDir = path.dirname(autorouterPath)
  const wrapperPath = path.join(tempDir, "__autorouter_wrapper__.ts")

  await Bun.write(wrapperPath, wrapperCode)

  try {
    const result = await Bun.build({
      entrypoints: [wrapperPath],
      target: "browser",
      minify: false,
      sourcemap: "none",
      external: [],
    })

    if (!result.success) {
      const errors = result.logs.map((log) => log.message).join("\n")
      throw new Error(`Bundle failed: ${errors}`)
    }

    const output = result.outputs[0]
    const bundleText = await output.text()

    return bundleText
  } finally {
    // Clean up temp wrapper file
    try {
      ;(await Bun.file(wrapperPath).exists()) &&
        (await import("node:fs/promises")).unlink(wrapperPath)
    } catch {
      // Ignore cleanup errors
    }
  }
}

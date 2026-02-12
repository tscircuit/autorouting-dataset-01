import { readFileSync } from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"
import type { SolverConstructor } from "types/run-benchmark/SolverConstructor"

type LoadedAutorouter = {
  solverConstructor: SolverConstructor
  solverName: string
  packageInfo?: {
    name: string
    version: string
    sourceCode?: string
    sourceFilename?: string
  }
}

/**
 * Extracts solver source code from a package's source map.
 */
const extractSourceFromSourceMap = (
  packageDir: string,
  solverName: string,
): { sourceCode: string; sourceFilename: string } | undefined => {
  try {
    // Look for source map in dist folder
    const sourceMapPath = path.join(packageDir, "dist", "index.js.map")
    const sourceMap = JSON.parse(readFileSync(sourceMapPath, "utf-8"))

    if (!sourceMap.sources || !sourceMap.sourcesContent) {
      return undefined
    }

    // Find the source file that matches the solver name
    const sourceIndex = sourceMap.sources.findIndex((s: string) =>
      s.includes(solverName),
    )

    if (sourceIndex === -1) {
      return undefined
    }

    return {
      sourceCode: sourceMap.sourcesContent[sourceIndex],
      sourceFilename: path.basename(sourceMap.sources[sourceIndex]),
    }
  } catch {
    return undefined
  }
}

const AUTOROUTER_PACKAGE = "@tscircuit/capacity-autorouter"

/**
 * Gets package info for the autorouter package.
 */
const detectPackageInfo = (
  autorouterPath: string,
  solverName: string,
): LoadedAutorouter["packageInfo"] | undefined => {
  try {
    // Search for node_modules containing the autorouter package
    let searchDir = path.dirname(autorouterPath)
    while (searchDir !== path.dirname(searchDir)) {
      try {
        const packageDir = path.join(
          searchDir,
          "node_modules",
          AUTOROUTER_PACKAGE,
        )
        const pkgJsonPath = path.join(packageDir, "package.json")
        const pkgJson = JSON.parse(readFileSync(pkgJsonPath, "utf-8"))

        // Try to extract source code from source map
        const sourceInfo = extractSourceFromSourceMap(packageDir, solverName)

        return {
          name: AUTOROUTER_PACKAGE,
          version: pkgJson.version,
          sourceCode: sourceInfo?.sourceCode,
          sourceFilename: sourceInfo?.sourceFilename,
        }
      } catch {
        // Package not found in this node_modules, try parent
      }
      searchDir = path.dirname(searchDir)
    }
  } catch {
    // Failed to detect package info
  }
  return undefined
}

/**
 * Dynamically imports a user's autorouter file and finds exports containing "Pipeline".
 * Returns the matching constructor and its name.
 *
 * @param autorouterPath - Path to the autorouter file
 * @param requestedSolverName - Optional specific export name to use
 */
const loadUserAutorouter = async (
  autorouterPath: string,
  requestedSolverName?: string | null,
): Promise<LoadedAutorouter> => {
  let exports: Record<string, unknown>

  try {
    // Convert to file URL for proper import
    const fileUrl = pathToFileURL(autorouterPath).href
    const module = await import(fileUrl)
    exports = module
  } catch (error) {
    throw new Error(
      `Failed to import autorouter from "${autorouterPath}": ${(error as Error).message}`,
    )
  }

  // We'll detect package info after we know the solver name
  let packageInfo: LoadedAutorouter["packageInfo"] | undefined

  // Check for a display name map (like solverDisplayNameByConstructor)
  let displayNameMap: Map<unknown, string> | null = null
  for (const [, exportValue] of Object.entries(exports)) {
    if (exportValue instanceof Map) {
      // Check if it maps functions to strings
      const firstEntry = exportValue.entries().next().value
      if (
        firstEntry &&
        typeof firstEntry[0] === "function" &&
        typeof firstEntry[1] === "string"
      ) {
        displayNameMap = exportValue as Map<unknown, string>
        break
      }
    }
  }

  // Helper to get display name for a solver
  const getDisplayName = (solver: unknown, fallback: string): string => {
    if (displayNameMap) {
      const name = displayNameMap.get(solver)
      if (name) return name
    }
    return fallback
  }

  // Collect all potential solvers from exports
  const pipelineExports: Array<{ name: string; value: unknown }> = []

  for (const [exportName, exportValue] of Object.entries(exports)) {
    // Direct function/class export
    if (typeof exportValue === "function" && !exportName.startsWith("_")) {
      const displayName = getDisplayName(exportValue, exportName)
      pipelineExports.push({ name: displayName, value: exportValue })
    }
    // Array of solvers (like SOLVER_CONSTRUCTOR_LIST)
    else if (Array.isArray(exportValue)) {
      for (const item of exportValue) {
        if (typeof item === "function") {
          const displayName = getDisplayName(item, item.name || "unknown")
          pipelineExports.push({ name: displayName, value: item })
        }
      }
    }
  }

  // Also check default export
  if (exports.default) {
    const defaultExport = exports.default
    if (typeof defaultExport === "function") {
      const fn = defaultExport as { name?: string }
      const displayName = getDisplayName(defaultExport, fn.name || "default")
      pipelineExports.push({ name: displayName, value: defaultExport })
    } else if (Array.isArray(defaultExport)) {
      for (const item of defaultExport) {
        if (typeof item === "function") {
          const fn = item as { name?: string }
          const displayName = getDisplayName(item, fn.name || "unknown")
          pipelineExports.push({ name: displayName, value: item })
        }
      }
    }
  }

  // If a specific solver name was requested, try to find it
  if (requestedSolverName) {
    const requestedExport = pipelineExports.find(
      (e) => e.name === requestedSolverName,
    )
    if (!requestedExport) {
      const availableNames = pipelineExports
        .map((e) => e.name)
        .filter((n) => n !== "default")
      throw new Error(
        `Solver "${requestedSolverName}" not found in "${autorouterPath}". ` +
          `Available solvers: ${availableNames.join(", ") || "(none)"}`,
      )
    }
    packageInfo = detectPackageInfo(autorouterPath, requestedSolverName)
    return {
      solverConstructor: requestedExport.value as SolverConstructor,
      solverName: requestedSolverName,
      packageInfo,
    }
  }

  if (pipelineExports.length === 0) {
    throw new Error(
      `No autorouter found in "${autorouterPath}". ` +
        `Expected an export containing "Pipeline" in its name (e.g., AutoroutingPipeline, MyPipeline).`,
    )
  }

  // If multiple exports found, list them for the user
  if (pipelineExports.length > 1) {
    console.log(
      `Found ${pipelineExports.length} potential solvers: ${pipelineExports.map((e) => e.name).join(", ")}`,
    )
    console.log(
      `Using "${pipelineExports[0].name}". To use a different one, specify it as the second argument.`,
    )
  }

  // Prefer exports with "Pipeline" in the name, otherwise use first found
  const preferredExport =
    pipelineExports.find((e) => e.name.toLowerCase().includes("pipeline")) ??
    pipelineExports[0]

  const solverConstructor = preferredExport.value as SolverConstructor

  // Validate it looks like a solver constructor
  if (typeof solverConstructor !== "function") {
    throw new Error(
      `Export "${preferredExport.name}" is not a class or function. ` +
        `Expected a solver constructor.`,
    )
  }

  packageInfo = detectPackageInfo(autorouterPath, preferredExport.name)
  return {
    solverConstructor,
    solverName: preferredExport.name,
    packageInfo,
  }
}

export { loadUserAutorouter }

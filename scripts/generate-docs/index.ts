import { generateDocs } from "scripts/generate-docs/generateDocs"

/**
 * Script to automatically generate README.md files for specified directories.
 * It parses the files in each directory and updates the corresponding README.md
 * with information about the exported components or functions.
 *
 * Usage:
 * bun scripts/genratedocs.ts [--dirs=lib:-1,scripts:1,types:-1,imports:-1]
 */
const main = () => {
  const defaultDepth = 1
  const directoriesToProcess = (
    process.argv
      .find((arg) => arg.startsWith("--dirs="))
      ?.slice("--dirs=".length) ?? "lib:-1,scripts:1,types:-1,imports:-1"
  )
    .split(",")
    .filter(Boolean)
    .map((entry) => {
      const [path, depthRaw] = entry
        .trim()
        .split(/[:=\s]+/)
        .filter(Boolean)
      const depth = depthRaw ? Number.parseInt(depthRaw, 10) : defaultDepth
      return {
        path,
        depth: Number.isFinite(depth) ? depth : defaultDepth,
      }
    })
    .filter((entry) => entry.path)

  generateDocs({ directories: directoriesToProcess })
}

main()

console.log(`Updated README.md for directories.`)

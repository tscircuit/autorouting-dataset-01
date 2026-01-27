import { generateDocs } from "utils/generateDocs"

/**
 * Script to automatically generate README.md files for specified directories.
 * It parses the files in each directory and updates the corresponding README.md
 * with information about the exported components or functions.
 * 
 * Usage:
 * bun scripts/genratedocs.ts [--dirs=lib,imports,utils,types,scripts]
 */
const main = () => {
  const directoriesToProcess = (
    process.argv
      .find((arg) => arg.startsWith("--dirs="))
      ?.slice("--dirs=".length) ?? "lib,imports,utils,types,scripts"
  )
    .split(",")
    .filter(Boolean)

  generateDocs({ directories: directoriesToProcess })
}

main()

console.log(`Updated README.md for directories.`)

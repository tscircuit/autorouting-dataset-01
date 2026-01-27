import { generateDocs } from "utils/generateDocs"

const main = () => {
  const directoriesToProcess = (
    process.argv
      .find((arg) => arg.startsWith("--dirs="))
      ?.slice("--dirs=".length) ?? "lib,imports,utils"
  )
    .split(",")
    .filter(Boolean)

  generateDocs({ directories: directoriesToProcess })
}

main()

console.log(`Updated README.md for directories.`)

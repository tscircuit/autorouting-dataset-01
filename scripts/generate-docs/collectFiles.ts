import fs from "node:fs"
import path from "node:path"

/**
 * Recursively collects all .tsx files from the given directory.
 */
export const collectFiles = (
  directory: string,
  fileList: string[],
  maxDepth = -1,
): void => {
  if (!fs.existsSync(directory)) return
  if (maxDepth === 0) return
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      if (maxDepth === 1) {
        const indexCandidates = ["index.ts", "index.tsx"]
        for (const filename of indexCandidates) {
          const indexPath = path.join(entryPath, filename)
          if (fs.existsSync(indexPath)) {
            fileList.push(indexPath)
            break
          }
        }
        continue
      }
      const nextDepth = maxDepth === -1 ? -1 : maxDepth - 1
      collectFiles(entryPath, fileList, nextDepth)
      continue
    }
    if (!entry.isFile()) continue
    if (directory.startsWith("lib") && entry.name.endsWith(".tsx")) {
      fileList.push(entryPath)
    }
    if (directory.startsWith("imports") && entry.name.endsWith(".tsx")) {
      fileList.push(entryPath)
    }
    if (
      directory.startsWith("utils") &&
      (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx"))
    ) {
      fileList.push(entryPath)
    }
    if (directory.startsWith("types") && entry.name.endsWith(".ts")) {
      fileList.push(entryPath)
    }
    if (
      directory.startsWith("scripts") &&
      (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx"))
    ) {
      fileList.push(entryPath)
    }
  }
}

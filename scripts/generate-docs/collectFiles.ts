import fs from "node:fs"
import path from "node:path"

/**
 * Recursively collects all .tsx files from the given directory.
 */
export const collectFiles = (directory: string, fileList: string[]): void => {
  if (!fs.existsSync(directory)) return
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      collectFiles(entryPath, fileList)
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

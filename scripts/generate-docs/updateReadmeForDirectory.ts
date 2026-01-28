import fs from "node:fs"
import path from "node:path"
import { extractJsdoc } from "scripts/generate-docs/extractJsdoc"

/**
 * Updates the README.md in a directory based on JSDoc comments in its files.
 */
export const updateReadmeForDirectory = (options: {
  directory: string
  directoryFiles: string[]
}): void => {
  const { directory, directoryFiles } = options
  const readmePath = path.join(directory, "README.md")
  const existing = fs.existsSync(readmePath)
    ? fs.readFileSync(readmePath, "utf8")
    : ""
  const firstListIndex = existing.search(/^\s*-\s+/m)
  const preamble =
    firstListIndex === -1
      ? existing.trimEnd()
      : existing.slice(0, firstListIndex).trimEnd()
  const lines: string[] = []
  if (preamble) lines.push(preamble, "")
  const sorted = directoryFiles.slice().sort()
  for (const file of sorted) {
    const content = fs.readFileSync(file, "utf8")
    const doc = extractJsdoc(content) || "MISSING JSDOC"
    lines.push(`- ${file}`, doc, "")
  }
  fs.writeFileSync(readmePath, `${lines.join("\n").trimEnd()}\n`)
}

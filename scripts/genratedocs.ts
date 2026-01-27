import fs from "node:fs"
import path from "node:path"

const params = {
  dirs: (
    process.argv
      .find((arg) => arg.startsWith("--dirs="))
      ?.slice("--dirs=".length) ?? "lib,imports"
  )
    .split(",")
    .filter(Boolean),
}

const files: string[] = []

const collectFiles = (dir: string) => {
  if (!fs.existsSync(dir)) return
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      collectFiles(entryPath)
      continue
    }
    if (!entry.isFile()) continue
    if (dir.startsWith("lib") && entry.name.endsWith(".tsx"))
      files.push(entryPath)
    if (dir.startsWith("imports") && entry.name.endsWith(".tsx"))
      files.push(entryPath)
  }
}

for (const dir of params.dirs) collectFiles(dir)

const extractJsdoc = (content: string) => {
  const match = content.match(/\/\*\*[\s\S]*?\*\//)
  if (!match) return ""
  return match[0]
    .replace(/^\/\*\*|\*\/$/g, "")
    .split("\n")
    .map((line) => line.replace(/^\s*\*\s?/, "").trim())
    .filter(Boolean)
    .join(" ")
    .trim()
}

const toPosix = (p: string) => p.replace(/\\/g, "/")

const filesByDir = new Map<string, string[]>()
for (const dir of params.dirs) filesByDir.set(dir, [])
for (const file of files) {
  const normalized = toPosix(file)
  for (const dir of params.dirs) {
    if (normalized.startsWith(`${dir}/`)) {
      filesByDir.get(dir)?.push(normalized)
      break
    }
  }
}

for (const [dir, dirFiles] of filesByDir.entries()) {
  const readmePath = path.join(dir, "README.md")
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
  const sorted = dirFiles.slice().sort()
  for (const file of sorted) {
    const content = fs.readFileSync(file, "utf8")
    const doc = extractJsdoc(content) || "MISSING JSDOC"
    lines.push(`- ${file}`, doc, "")
  }
  fs.writeFileSync(readmePath, `${lines.join("\n").trimEnd()}\n`)
}

console.log(`Updated README.md for ${params.dirs.length} directories.`)

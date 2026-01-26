import fs from "node:fs"
import path from "node:path"

const params = {
  dirs: (process.argv
    .find((arg) => arg.startsWith("--dirs="))
    ?.slice("--dirs=".length) ?? "lib,imports")
    .split(",")
    .filter(Boolean),
}

const readmeEntriesRegex = /(^|\n)-\s+(lib|imports)\/[^\s]+/g

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
    if (dir.startsWith("lib") && entry.name.endsWith(".tscircuit.tsx")) files.push(entryPath)
    if (dir.startsWith("imports") && entry.name.endsWith(".tsx")) files.push(entryPath)
  }
}

for (const dir of params.dirs) collectFiles(dir)

const readmeEntries = new Set<string>()

for (const dir of params.dirs) {
  const readmePath = path.join(dir, "README.md")
  if (!fs.existsSync(readmePath)) continue
  const readmeContent = fs.readFileSync(readmePath, "utf8")
  const matches = readmeContent.match(readmeEntriesRegex) ?? []
  for (const match of matches) readmeEntries.add(match.trim().replace(/^- /, ""))
}

const missing: string[] = []

for (const file of files) {
  const normalized = file.replace(/\\/g, "/")
  if (!readmeEntries.has(normalized)) missing.push(normalized)
}

if (missing.length > 0) {
  console.error("Missing README entry for:")
  for (const file of missing) console.error(`- ${file}`)
  process.exit(1)
}

console.log(`All ${files.length} files are listed in README.md.`)

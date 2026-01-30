import { execFileSync } from "node:child_process"
import { mkdtemp, readFile, rename, rm, writeFile } from "node:fs/promises"
import os from "node:os"
import path from "node:path"

/**
 * Write benchmark text, JSON, and HTML outputs to disk.
 */
const writeBenchmarkOutput = async (inputs: {
  outputDirectory: string
  outputText: string
  summaryJsonText: string
  detailJsonText: string
  html_text?: string
}) => {
  const {
    outputDirectory,
    outputText,
    summaryJsonText,
    detailJsonText,
    html_text,
  } = inputs
  const tempDirectory = await mkdtemp(
    path.join(outputDirectory || os.tmpdir(), "benchmark-output-"),
  )
  const outputPath = path.join(tempDirectory, "benchmark-output.txt")
  const summaryJsonPath = path.join(tempDirectory, "benchmark-output.json")
  const detailJsonPath = path.join(tempDirectory, "benchmark-details.json")
  const htmlPath = path.join(tempDirectory, "benchmark-visualization.html")
  const outputFileNameList = [
    path.basename(outputPath),
    path.basename(summaryJsonPath),
    path.basename(detailJsonPath),
  ]

  await writeFile(outputPath, outputText)
  await writeFile(summaryJsonPath, summaryJsonText)
  await writeFile(detailJsonPath, detailJsonText)

  if (html_text) {
    await writeFile(htmlPath, html_text)
    outputFileNameList.push(path.basename(htmlPath))
  }

  const packageJsonPath = path.resolve("package.json")
  const packageJsonText = await readFile(packageJsonPath, "utf8")
  const packageJson = JSON.parse(packageJsonText) as {
    devDependencies?: Record<string, string>
    dependencies?: Record<string, string>
  }
  const capacityAutorouterVersionText =
    packageJson.devDependencies?.["@tscircuit/capacity-autorouter"] ??
    packageJson.dependencies?.["@tscircuit/capacity-autorouter"] ??
    "unknown"
  const capacityAutorouterVersion = capacityAutorouterVersionText.replace(
    /^[^0-9]*/,
    "",
  )
  let gitCommitShort = "unknown"
  try {
    gitCommitShort = execFileSync("git", ["rev-parse", "--short", "HEAD"], {
      encoding: "utf8",
    }).trim()
  } catch {}

  const archiveFileName = `output-${gitCommitShort}-${capacityAutorouterVersion}.tar.gz`
  execFileSync("tar", ["-czf", archiveFileName, ...outputFileNameList], {
    cwd: tempDirectory,
    stdio: "inherit",
  })
  await rename(
    path.join(tempDirectory, archiveFileName),
    path.join(outputDirectory, archiveFileName),
  )
  await rm(tempDirectory, { recursive: true, force: true })
}

export { writeBenchmarkOutput }

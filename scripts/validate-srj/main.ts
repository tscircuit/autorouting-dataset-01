import fs from "fs"
import { SimpleRouteJson } from "tscircuit"
import { exit } from "process"
import { check } from "./check"
import { OverArgs } from "./types"

/** Runs the SRJ checker CLI against a target directory. */
export const main = () => {
  const argv = process.argv
  const targetDir = argv[2]
  if (!targetDir) {
    console.error("Please provide the target directory as an argument.")
    return
  }
  const params: OverArgs[] = []

  const scenarioFiles = fs
    .readdirSync(targetDir)
    .filter((file) => file.endsWith(".json"))
  for (const scenarioFile of scenarioFiles) {
    params.push({
      srj: JSON.parse(
        fs.readFileSync(`${targetDir}/${scenarioFile}`, "utf-8"),
      ) as SimpleRouteJson,
      fileName: scenarioFile,
    })
  }

  const result = check(params)

  if (
    result.failedFileNamesForObstacleOverlap.length > 0 ||
    result.failedFileNamesForOutOfBoardBounds.length > 0
  ) {
    const message = [
      "Found overlapping obstacles in the following files:",
      ...result.failedFileNamesForObstacleOverlap.map(
        (file) => `- ${file.filesName}: ${file.which}`,
      ),
      "",
      "Found obstacles that are out of board bounds in the following files:",
      ...result.failedFileNamesForOutOfBoardBounds.map(
        (file) => `- ${file.filesName}: ${file.which}`,
      ),
    ].join("\n")
    console.error(message)
  }
  exit(0)
}

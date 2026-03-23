import { spawn } from "node:child_process"
import { readFile } from "node:fs/promises"
import { writeDatasetIndex } from "scripts/create-dataset/createDatasetFromLib"

type TscircuitConfig = {
  mainEntrypoint?: string
  ignoredFiles?: string[]
  includeBoardFiles?: string[]
}

const normalizeCircuitPath = (filePath: string): string => {
  if (!filePath.endsWith(".tsx")) {
    console.error("Provided file path must end with .tsx")
    process.exit(1)
  }

  return filePath.replace(/^\.\//, "")
}

const getCircuitFilePathList = async (): Promise<string[]> => {
  const tscircuitConfigText = await readFile("tscircuit.config.json", "utf8")
  const tscircuitConfig = JSON.parse(tscircuitConfigText) as TscircuitConfig
  const ignoredFileSet = new Set(tscircuitConfig.ignoredFiles ?? [])
  const includeBoardFiles = tscircuitConfig.includeBoardFiles ?? []
  const mainEntrypointList: string[] = []
  const { mainEntrypoint } = tscircuitConfig

  if (typeof mainEntrypoint === "string") {
    mainEntrypointList.push(mainEntrypoint)
  }

  return Array.from(new Set([...mainEntrypointList, ...includeBoardFiles]))
    .filter(
      (circuitFilePath) =>
        circuitFilePath.endsWith(".tsx") &&
        !ignoredFileSet.has(circuitFilePath),
    )
    .sort()
}

const runCircuitInFreshProcess = async (
  circuitFilePath: string,
): Promise<void> => {
  await new Promise<void>((resolve, reject) => {
    const child = spawn(
      process.execPath,
      ["scripts/create-dataset/createDatasetFromLib.ts", circuitFilePath],
      {
        cwd: process.cwd(),
        stdio: "inherit",
      },
    )

    child.on("error", reject)
    child.on("exit", (code, signal) => {
      if (code === 0) {
        resolve()
        return
      }

      const failure =
        signal === null
          ? new Error(
              `Dataset generation failed for ${circuitFilePath} with exit code ${code}`,
            )
          : new Error(
              `Dataset generation failed for ${circuitFilePath} with signal ${signal}`,
            )
      reject(failure)
    })
  })
}

/**
 * Main script to generate a dataset from the circuits defined in lib/circuit.
 * It uses tscircuit.config.json to decide which circuit files to render into `lib/dataset/`.
 * Each circuit runs in a fresh Bun process so leaked memory is released after every run.
 */
const main = async () => {
  const filePath = process.argv[2]
  const circuitFilePathList = filePath
    ? [normalizeCircuitPath(filePath)]
    : await getCircuitFilePathList()

  for (const circuitFilePath of circuitFilePathList) {
    await runCircuitInFreshProcess(circuitFilePath)
  }

  await writeDatasetIndex()
  process.exit(0)
}

void main()

import { readFile } from "node:fs/promises"
import { createDatasetFromLib } from "scripts/create-dataset/createDatasetFromLib"

type TscircuitConfig = {
  mainEntrypoint?: string
  mainEntryPoints?: string | string[]
  mainEntrypoints?: string[]
  ignoredFiles?: string[]
  includeBoardFiles?: string[]
}

/**
 * Main script to generate a dataset from the circuits defined in lib/circuit.
 * It uses tscircuit.config.json to decide which circuit files to render into `lib/dataset/`.
 */
const main = async () => {
  const tscircuitConfigText = await readFile("tscircuit.config.json", "utf8")
  const tscircuitConfig = JSON.parse(tscircuitConfigText) as TscircuitConfig
  const ignoredFileSet = new Set(tscircuitConfig.ignoredFiles ?? [])
  const includeBoardFiles = tscircuitConfig.includeBoardFiles ?? []
  const mainEntrypointList: string[] = []
  const { mainEntrypoint, mainEntryPoints, mainEntrypoints } = tscircuitConfig

  if (typeof mainEntrypoint === "string") {
    mainEntrypointList.push(mainEntrypoint)
  }

  if (typeof mainEntryPoints === "string") {
    mainEntrypointList.push(mainEntryPoints)
  } else if (Array.isArray(mainEntryPoints)) {
    mainEntrypointList.push(...mainEntryPoints)
  }

  if (Array.isArray(mainEntrypoints)) {
    mainEntrypointList.push(...mainEntrypoints)
  }

  const circuitFilePathList = Array.from(
    new Set([...mainEntrypointList, ...includeBoardFiles]),
  ).filter(
    (circuitFilePath) =>
      circuitFilePath.endsWith(".tsx") && !ignoredFileSet.has(circuitFilePath),
  )

  await createDatasetFromLib({ circuitFilePathList })
}

void main().then(
  () => {
    process.exit(0)
  },
  (error) => {
    console.error(error)
    process.exit(1)
  },
)

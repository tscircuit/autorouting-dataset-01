import { mkdir, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { processCircuitModule } from "scripts/create-dataset/processCircuitModule"

export const writeDatasetIndex = async (
  datasetDirectory = path.resolve("lib", "dataset"),
): Promise<void> => {
  await mkdir(datasetDirectory, { recursive: true })

  const datasetFiles = (await readdir(datasetDirectory))
    .filter((file) => file.endsWith(".simple-route.json"))
    .sort()

  const indexContent = datasetFiles
    .map((file) => {
      const name = file.replace(".simple-route.json", "")
      return `export { default as ${name.replace(/-/g, "_")} } from "./${file}"`
    })
    .join("\n")

  await writeFile(path.join(datasetDirectory, "index.ts"), indexContent)
}

/**
 * Processes the provided circuit file paths into the dataset.
 */
export const createDatasetFromLib = async (createDatasetRequest: {
  circuitFilePathList: string[]
}): Promise<string[]> => {
  const datasetDirectory = path.resolve("lib", "dataset")

  await mkdir(datasetDirectory, { recursive: true })

  const circuitFilePathList = [
    ...createDatasetRequest.circuitFilePathList,
  ].sort()

  const generatedBaseNames: string[] = []

  for (const circuitFilePath of circuitFilePathList) {
    const baseName = path.basename(circuitFilePath, ".tsx")
    const modulePath = circuitFilePath.replace(/\.tsx$/, "")

    const result = await processCircuitModule({
      baseName,
      modulePath,
      datasetDirectory,
    })

    if (result) {
      generatedBaseNames.push(result)
    }
  }

  await writeDatasetIndex(datasetDirectory)

  return generatedBaseNames
}

const main = async () => {
  const circuitFilePath = process.argv[2]

  if (!circuitFilePath) {
    console.error(
      "Usage: bun scripts/create-dataset/createDatasetFromLib.ts <circuit-file.tsx>",
    )
    process.exit(1)
  }

  if (!circuitFilePath.endsWith(".tsx")) {
    console.error("Provided file path must end with .tsx")
    process.exit(1)
  }

  await createDatasetFromLib({
    circuitFilePathList: [circuitFilePath.replace(/^\.\//, "")],
  })

  process.exit(0)
}

if (import.meta.main) {
  void main().catch((error) => {
    console.error(error)
    process.exit(1)
  })
}

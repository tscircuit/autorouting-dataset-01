import { mkdir, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { processCircuitModule } from "scripts/create-dataset/processCircuitModule"

/**
 * Processes the provided circuit file paths into the dataset.
 */
export const createDatasetFromLib = async (createDatasetRequest: {
  circuitFilePathList: string[]
}): Promise<void> => {
  const datasetDirectory = path.resolve("lib", "dataset")

  await mkdir(datasetDirectory, { recursive: true })

  const circuitFilePathList = [
    ...createDatasetRequest.circuitFilePathList,
  ].sort()
  const processedBaseNameList: string[] = []

  for (const circuitFilePath of circuitFilePathList) {
    const baseName = path.basename(circuitFilePath, ".tsx")
    const modulePath = circuitFilePath.replace(/\.tsx$/, "")

    const result = await processCircuitModule({
      baseName,
      modulePath,
      datasetDirectory,
    })

    if (result) {
      processedBaseNameList.push(result)
    }
  }

  const datasetFiles = (await readdir(datasetDirectory)).filter((file) =>
    file.endsWith(".simple-route.json"),
  )

  const indexContent = datasetFiles
    .map((file) => {
      const name = file.replace(".simple-route.json", "")
      return `export { default as ${name.replace(/-/g, "_")} } from "./${file}"`
    })
    .join("\n")
  await writeFile(path.join(datasetDirectory, "index.ts"), indexContent)
}

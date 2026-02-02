import { mkdir, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { processCircuitModule } from "scripts/create-dataset/processCircuitModule"

/**
 * Iterates through the lib directory and processes each TSX file into the dataset.
 */
export const createDatasetFromLib = async (): Promise<void> => {
  const circuitsDirectory = path.resolve("lib", "circuit")
  const datasetDirectory = path.resolve("lib", "dataset")

  await mkdir(datasetDirectory, { recursive: true })

  const files = (await readdir(circuitsDirectory)).filter((file) =>
    file.endsWith(".tsx"),
  )

  files.sort()

  const processedBaseNames: string[] = []

  for (const file of files) {
    const baseName = file.replace(/\.tsx$/, "")
    const modulePath = `lib/circuit/${baseName}`

    const result = await processCircuitModule({
      baseName,
      modulePath,
      datasetDirectory,
    })

    if (result) {
      processedBaseNames.push(result)
    }
  }

  const datasetFiles = (await readdir(datasetDirectory)).filter((file) =>
    file.endsWith(".simple-route-before.json"),
  )

  const indexContent = datasetFiles
    .map((file) => {
      const name = file.replace(".simple-route-before.json", "")
      return `export { default as ${name.replace(/-/g, "_")} } from "./${file}"`
    })
    .join("\n")
  await writeFile(path.join(datasetDirectory, "index.ts"), indexContent)
}

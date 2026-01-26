import { RootCircuit } from "@tscircuit/core"
import { mkdir, readdir, writeFile } from "fs/promises"
import path from "path"

/*
 * This script creates a dataset of simple-route-before.json files
*/
const main = async () => {
  const libDir = path.resolve("lib")
  const datasetDir = path.resolve("dataset")

  await mkdir(datasetDir, { recursive: true })

  const files = (await readdir(libDir)).filter((file) =>
    file.endsWith(".tscircuit.tsx")
  )

  for (const file of files) {
    const baseName = file.replace(/\.tscircuit\.tsx$/, "")
    const modulePath = `lib/${file.replace(/\.tsx$/, "")}`
    const { default: Circuit } = await import(modulePath)

    const circuit = new RootCircuit()
    circuit.add(<Circuit />)

    const outputPath = path.join(
      datasetDir,
      `${baseName}.simple-route-before.json`
    )

    console.log("[Start]", baseName)

    const simpleRouteWritten = new Promise<void>((resolve, reject) => {
      circuit.on("autorouting:start", async ({ simpleRouteJson }) => {
        try {
          await writeFile(
            outputPath,
            JSON.stringify(simpleRouteJson, null, 2)
          )
          console.log("[Done]", baseName)
          resolve()
        } catch (err) {
          console.log("[Error] writeFile", baseName)
          reject(err)
        }
      })
      circuit.on("autorouting:error", (err) => {
        console.log("[Error] autorouting", baseName)
        reject(err)
      })
    })

    circuit.render()
    await simpleRouteWritten
  }
}

void main().then(
  () => {
    process.exit(0)
  },
  (err) => {
    console.error(err)
    process.exit(1)
  }
)

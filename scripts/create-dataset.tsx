import { mkdir, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { RootCircuit } from "@tscircuit/core"

/*
 * This script creates a dataset of simple-route-before.json files
 */
const main = async () => {
  const libDir = path.resolve("lib")
  const datasetDir = path.resolve("dataset")

  await mkdir(datasetDir, { recursive: true })

  const files = (await readdir(libDir)).filter((file) => file.endsWith(".tsx"))

  for (const file of files) {
    const baseName = file.replace(/\.tsx$/, "")
    const modulePath = `lib/${file.replace(/\.tsx$/, "")}`
    let Circuit: unknown
    try {
      ;({ default: Circuit } = await import(modulePath))
    } catch (err) {
      const reason = err instanceof Error ? err.message : String(err)
      console.log(`[Ignored] ${file} due to import failure: ${reason}`)
      continue
    }

    const circuit = new RootCircuit()
    const CircuitComponent = Circuit as any
    circuit.add(<CircuitComponent />)

    const outputPath = path.join(
      datasetDir,
      `${baseName}.simple-route-before.json`,
    )

    console.log("[Start]", baseName)

    const simpleRouteWritten = new Promise<void>((resolve, reject) => {
      let settled = false
      const cleanup = () => {
        if (settled) return
        settled = true
      }
      circuit.on("autorouting:start", async ({ simpleRouteJson }) => {
        if (settled) return
        try {
          await writeFile(outputPath, JSON.stringify(simpleRouteJson, null, 2))
          console.log("[Done]", baseName)
          cleanup()
          resolve()
        } catch (err) {
          console.log("[Error] writeFile", baseName)
          cleanup()
          reject(err)
        }
      })
      circuit.on("autorouting:error", (err) => {
        if (settled) return
        console.log("[Error] autorouting", baseName)
        cleanup()
        reject(err)
      })
    })

    const timeoutMs = 60_000
    const timeout = new Promise<void>((_, reject) => {
      setTimeout(() => reject(new Error("autorouting timeout")), timeoutMs)
    })

    try {
      circuit.render()
      await Promise.race([simpleRouteWritten, timeout])
    } catch (err) {
      const reason = err instanceof Error ? err.message : String(err)
      console.log(`[Ignored] ${file} due to autorouting failure: ${reason}`)
    }
  }
}

void main().then(
  () => {
    process.exit(0)
  },
  (err) => {
    console.error(err)
    process.exit(1)
  },
)

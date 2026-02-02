import { writeFile } from "node:fs/promises"
import path from "node:path"
import { RootCircuit } from "@tscircuit/core"

/**
 * Loads a circuit module and saves its simple route JSON to the dataset.
 */
export const processCircuitModule = async (options: {
  baseName: string
  modulePath: string
  datasetDirectory: string
}): Promise<string | null> => {
  const { baseName, modulePath, datasetDirectory } = options
  let Circuit: any
  try {
    ;({ default: Circuit } = await import(modulePath))
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.log(`[Ignored] ${baseName} due to import failure: ${errorMessage}`)
    return null
  }

  const circuit = new RootCircuit()
  // TODO: more research on which parts to disable so we still get the callbacks
  // but the autorouter is disabled
  // circuit.pcbRoutingDisabled = true
  circuit.schematicDisabled = true
  // circuit.pcbDisabled = true
  circuit.add(<Circuit />)

  const outputPath = path.join(
    datasetDirectory,
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
      } catch (error) {
        console.log("[Error] writeFile", baseName)
        cleanup()
        reject(error)
      }
    })
    circuit.on("autorouting:error", (error) => {
      if (settled) return
      console.log("[Error] autorouting", baseName)
      cleanup()
      reject(error)
    })
  })

  const timeoutMs = 60_000
  const timeout = new Promise<void>((_, reject) => {
    setTimeout(() => reject(new Error("autorouting timeout")), timeoutMs)
  })

  try {
    circuit.render()
    await Promise.race([simpleRouteWritten, timeout])
    return baseName
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.log(
      `[Ignored] ${baseName} due to autorouting failure: ${errorMessage}`,
    )
    return null
  }
}

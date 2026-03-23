import { writeFile } from "node:fs/promises"
import path from "node:path"
import { RootCircuit } from "@tscircuit/core"

/**
 * Loads a circuit module and saves its simple route JSON to the dataset.
 */
export const processCircuitModule = async (processCircuitRequest: {
  baseName: string
  modulePath: string
  datasetDirectory: string
}): Promise<string | null> => {
  const { baseName, modulePath, datasetDirectory } = processCircuitRequest
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
    `${baseName}.simple-route.json`,
  )

  console.log("[Start]", baseName)

  const simpleRouteWritten = new Promise<string | null>((resolve, reject) => {
    let settled = false
    let hasAutoroutingStarted = false
    const cleanup = () => {
      if (settled) return
      settled = true
    }
    circuit.on("autorouting:start", async ({ simpleRouteJson }) => {
      if (settled) return
      hasAutoroutingStarted = true
      try {
        await writeFile(outputPath, JSON.stringify(simpleRouteJson, null, 2))
        console.log("[Done]", baseName)
        cleanup()
        resolve(baseName)
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
    circuit.on("renderComplete", () => {
      if (settled || hasAutoroutingStarted) return
      console.log(`[Ignored] ${baseName} due to missing autorouting output`)
      cleanup()
      resolve(null)
    })
  })

  const timeoutMs = 60_000
  let timeoutHandle: ReturnType<typeof setTimeout> | undefined
  const timeout = new Promise<string | null>((_, reject) => {
    timeoutHandle = setTimeout(
      () => reject(new Error("autorouting timeout")),
      timeoutMs,
    )
  })

  try {
    void circuit.renderUntilSettled()
    const result = await Promise.race([simpleRouteWritten, timeout])
    if (timeoutHandle) {
      clearTimeout(timeoutHandle)
    }
    return result
  } catch (error) {
    if (timeoutHandle) {
      clearTimeout(timeoutHandle)
    }
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.log(
      `[Ignored] ${baseName} due to autorouting failure: ${errorMessage}`,
    )
    return null
  }
}

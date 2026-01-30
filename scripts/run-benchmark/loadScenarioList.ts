import { readFile, readdir } from "node:fs/promises"
import path from "node:path"
import type { Scenario } from "types/run-benchmark/Scenario"
import type { SimpleRouteJson } from "types/run-benchmark/SimpleRouteJson"

const loadScenarioList = async (inputs: {
  datasetDirectory: string
  scenarioCountLimit: number
}): Promise<Scenario[]> => {
  const { datasetDirectory, scenarioCountLimit } = inputs
  const datasetFileList = (await readdir(datasetDirectory))
    .filter((fileName) => fileName.endsWith(".simple-route-before.json"))
    .sort()
  const limitedFileList = datasetFileList.slice(0, scenarioCountLimit)

  if (limitedFileList.length === 0) {
    return []
  }

  const scenarioList: Scenario[] = []

  for (const fileName of limitedFileList) {
    const scenarioName = fileName.replace(".simple-route-before.json", "")
    const simpleRouteJsonText = await readFile(
      path.join(datasetDirectory, fileName),
      "utf8",
    )
    const simpleRouteJson = JSON.parse(simpleRouteJsonText) as SimpleRouteJson
    scenarioList.push({ scenarioName, simpleRouteJson })
  }

  return scenarioList
}

export { loadScenarioList }

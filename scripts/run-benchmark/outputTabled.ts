import type { BenchmarkRow } from "types/run-benchmark/BenchmarkRow"
import type { Scenario } from "types/run-benchmark/Scenario"
import { buildBenchmarkTableRows } from "scripts/run-benchmark/buildBenchmarkTableRows"

/**
 * Render benchmark results as a table.
 */
const outputTabled = (inputs: {
  resultRowList: BenchmarkRow[]
  scenarioList: Scenario[]
}): string => {
  const { resultRowList, scenarioList } = inputs
  const { tableHeaderList, tableRowList } = buildBenchmarkTableRows({
    resultRowList,
  })

  const columnWidths = tableHeaderList.map((header, columnIndex) => {
    let maxWidth = header.length
    for (const rowCells of tableRowList) {
      const cellText = rowCells[columnIndex]
      if (cellText.length > maxWidth) {
        maxWidth = cellText.length
      }
    }
    return maxWidth
  })

  const separator = `+${columnWidths
    .map((width) => "-".repeat(width + 2))
    .join("+")}+`

  const headerLine = `| ${tableHeaderList
    .map((header, columnIndex) => header.padEnd(columnWidths[columnIndex]))
    .join(" | ")} |`

  const bodyLines = tableRowList.map(
    (rowCells) =>
      `| ${rowCells
        .map((cellText, columnIndex) =>
          cellText.padEnd(columnWidths[columnIndex]),
        )
        .join(" | ")} |`,
  )

  const tableText = [
    separator,
    headerLine,
    separator,
    ...bodyLines,
    separator,
  ].join("\n")

  const outputLines = [tableText, "", `Scenarios: ${scenarioList.length}`]

  return outputLines.join("\n")
}

export { outputTabled }

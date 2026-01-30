import type { BenchmarkRow } from "types/run-benchmark/BenchmarkRow"
import type { Scenario } from "types/run-benchmark/Scenario"
import { formatTimeSeconds } from "scripts/run-benchmark/formatTimeSeconds"

/**
 * Render benchmark results as a table.
 */
const outputTabled = (inputs: {
  resultRowList: BenchmarkRow[]
  scenarioList: Scenario[]
}): string => {
  const { resultRowList, scenarioList } = inputs
  const tableHeaders = [
    "Solver",
    "% Completed",
    "% Relaxed DRC Pass",
    "P50 Time",
    "P95 Time",
  ]

  const tableRows = resultRowList.map((result) => [
    result.solverName,
    `${result.successRatePercent.toFixed(1)}%`,
    result.relaxedDrcRatePercent === null
      ? "n/a"
      : `${result.relaxedDrcRatePercent.toFixed(1)}%`,
    formatTimeSeconds(result.p50TimeMs),
    formatTimeSeconds(result.p95TimeMs),
  ])

  const columnWidths = tableHeaders.map((header, columnIndex) => {
    let maxWidth = header.length
    for (const rowCells of tableRows) {
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

  const headerLine = `| ${tableHeaders
    .map((header, columnIndex) => header.padEnd(columnWidths[columnIndex]))
    .join(" | ")} |`

  const bodyLines = tableRows.map(
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

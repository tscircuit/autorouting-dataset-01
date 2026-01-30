import type { BenchmarkRow } from "types/run-benchmark/BenchmarkRow"
import type { Scenario } from "types/run-benchmark/Scenario"

const outputTabled = (inputs: {
  resultRowList: BenchmarkRow[]
  scenarioList: Scenario[]
}): string => {
  const { resultRowList, scenarioList } = inputs
  const tableHeaders = [
    "Solver",
    "Total Time (ms)",
    "Success Rate",
    "% Relaxed DRC Passed",
  ]

  const tableRows = resultRowList.map((result) => [
    result.solverName,
    `${Math.round(result.totalTimeMs)}`,
    `${result.successRatePercent.toFixed(1)}%`,
    result.relaxedDrcRatePercent === null
      ? "n/a"
      : `${result.relaxedDrcRatePercent.toFixed(1)}%`,
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

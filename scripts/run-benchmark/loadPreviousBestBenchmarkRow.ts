import { readFile } from "node:fs/promises"
import type { BenchmarkRow } from "types/run-benchmark/BenchmarkRow"

type BenchmarkSummaryLike = {
  resultRowList?: unknown
  tableHeaderList?: unknown
  tableRowList?: unknown
}

const isFiniteNumber = (value: unknown): value is number =>
  typeof value === "number" && Number.isFinite(value)

const isBenchmarkRow = (value: unknown): value is BenchmarkRow => {
  if (!value || typeof value !== "object") return false

  const row = value as Partial<BenchmarkRow>
  return (
    typeof row.solverName === "string" &&
    isFiniteNumber(row.totalTimeMs) &&
    (row.p50TimeMs === null || isFiniteNumber(row.p50TimeMs)) &&
    (row.p95TimeMs === null || isFiniteNumber(row.p95TimeMs)) &&
    isFiniteNumber(row.successRatePercent) &&
    (row.relaxedDrcRatePercent === null ||
      isFiniteNumber(row.relaxedDrcRatePercent))
  )
}

const parsePercentCell = (cellText: string): number | null => {
  const normalized = cellText.trim().replace(/%$/, "")
  const percent = Number(normalized)
  return Number.isFinite(percent) ? percent : null
}

const parseTimeCell = (cellText: string): number | null => {
  const normalized = cellText.trim().toLowerCase()
  if (normalized === "n/a") return null

  const match = normalized.match(/^([0-9.]+)\s*(ms|s)$/)
  if (!match) return null

  const value = Number(match[1])
  if (!Number.isFinite(value)) return null

  return match[2] === "ms" ? value : value * 1000
}

const getColumnIndex = (headers: string[], label: string): number =>
  headers.findIndex((header) => header.trim().toLowerCase() === label)

const getBenchmarkRowsFromSummaryTable = (
  summary: BenchmarkSummaryLike,
): BenchmarkRow[] => {
  if (
    !Array.isArray(summary.tableHeaderList) ||
    !Array.isArray(summary.tableRowList) ||
    !summary.tableHeaderList.every((header) => typeof header === "string")
  ) {
    return []
  }

  const headers = summary.tableHeaderList as string[]
  const solverIndex = getColumnIndex(headers, "solver")
  const completedIndex = getColumnIndex(headers, "completed %")
  const relaxedDrcIndex = getColumnIndex(headers, "relaxed drc pass %")
  const p50Index = getColumnIndex(headers, "p50 time")
  const p95Index = getColumnIndex(headers, "p95 time")

  if (
    solverIndex < 0 ||
    completedIndex < 0 ||
    relaxedDrcIndex < 0 ||
    p50Index < 0 ||
    p95Index < 0
  ) {
    return []
  }

  return summary.tableRowList.flatMap((row): BenchmarkRow[] => {
    if (!Array.isArray(row) || !row.every((cell) => typeof cell === "string")) {
      return []
    }

    const solverName = row[solverIndex]
    const successRatePercent = parsePercentCell(row[completedIndex] ?? "")
    const relaxedDrcRatePercent =
      row[relaxedDrcIndex]?.trim().toLowerCase() === "n/a"
        ? null
        : parsePercentCell(row[relaxedDrcIndex] ?? "")
    const p50TimeMs = parseTimeCell(row[p50Index] ?? "")
    const p95TimeMs = parseTimeCell(row[p95Index] ?? "")

    if (!solverName || successRatePercent === null) {
      return []
    }

    return [
      {
        solverName,
        totalTimeMs: 0,
        p50TimeMs,
        p95TimeMs,
        successRatePercent,
        relaxedDrcRatePercent,
      },
    ]
  })
}

export const getBestBenchmarkRow = (
  rowList: BenchmarkRow[],
): BenchmarkRow | null => {
  if (rowList.length === 0) return null

  return rowList.reduce((best, row) => {
    const bestRelaxedDrc = best.relaxedDrcRatePercent ?? -1
    const rowRelaxedDrc = row.relaxedDrcRatePercent ?? -1
    const bestP50 = best.p50TimeMs ?? Number.POSITIVE_INFINITY
    const rowP50 = row.p50TimeMs ?? Number.POSITIVE_INFINITY
    const bestP95 = best.p95TimeMs ?? Number.POSITIVE_INFINITY
    const rowP95 = row.p95TimeMs ?? Number.POSITIVE_INFINITY

    if (row.successRatePercent !== best.successRatePercent) {
      return row.successRatePercent > best.successRatePercent ? row : best
    }
    if (rowRelaxedDrc !== bestRelaxedDrc) {
      return rowRelaxedDrc > bestRelaxedDrc ? row : best
    }
    if (rowP50 !== bestP50) {
      return rowP50 < bestP50 ? row : best
    }
    if (rowP95 !== bestP95) {
      return rowP95 < bestP95 ? row : best
    }
    return best
  })
}

export const getBenchmarkRowsFromSummary = (
  summary: BenchmarkSummaryLike,
): BenchmarkRow[] => {
  if (Array.isArray(summary.resultRowList)) {
    const rowList = summary.resultRowList.filter(isBenchmarkRow)
    if (rowList.length > 0) return rowList
  }

  return getBenchmarkRowsFromSummaryTable(summary)
}

export const loadPreviousBestBenchmarkRow = async (
  previousResultsPath: string | null | undefined,
): Promise<BenchmarkRow | null> => {
  if (!previousResultsPath) return null

  const previousResultsText = await readFile(previousResultsPath, "utf8")
  const previousResults = JSON.parse(
    previousResultsText,
  ) as BenchmarkSummaryLike
  return getBestBenchmarkRow(getBenchmarkRowsFromSummary(previousResults))
}

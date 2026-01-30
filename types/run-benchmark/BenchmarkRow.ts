export type BenchmarkRow = {
  solverName: string
  totalTimeMs: number
  p50TimeMs: number | null
  p95TimeMs: number | null
  successRatePercent: number
  relaxedDrcRatePercent: number | null
}

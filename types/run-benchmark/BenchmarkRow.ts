export type BenchmarkRow = {
  solverName: string
  totalTimeMs: number
  successRatePercent: number
  relaxedDrcRatePercent: number | null
}

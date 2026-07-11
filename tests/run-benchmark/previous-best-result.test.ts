import { expect, test } from "bun:test"
import { getCliOptionsFromArgList } from "scripts/run-benchmark/getCliOptionsFromArgList"
import {
  getBenchmarkRowsFromSummary,
  getBestBenchmarkRow,
} from "scripts/run-benchmark/loadPreviousBestBenchmarkRow"

test("selects the previous best benchmark row by solve rate, drc rate, then p50", () => {
  const best = getBestBenchmarkRow([
    {
      solverName: "slow-complete",
      totalTimeMs: 0,
      p50TimeMs: 5000,
      p95TimeMs: 9000,
      successRatePercent: 100,
      relaxedDrcRatePercent: 100,
    },
    {
      solverName: "fast-complete",
      totalTimeMs: 0,
      p50TimeMs: 1200,
      p95TimeMs: 4000,
      successRatePercent: 100,
      relaxedDrcRatePercent: 100,
    },
    {
      solverName: "partial",
      totalTimeMs: 0,
      p50TimeMs: 100,
      p95TimeMs: 200,
      successRatePercent: 80,
      relaxedDrcRatePercent: 100,
    },
  ])

  expect(best?.solverName).toBe("fast-complete")
})

test("reads previous benchmark rows from legacy summary table json", () => {
  const rowList = getBenchmarkRowsFromSummary({
    tableHeaderList: [
      "Solver",
      "Completed %",
      "Relaxed DRC Pass %",
      "P50 Time",
      "P95 Time",
    ],
    tableRowList: [["capacity", "92.5%", "90.0%", "1.2s", "4.6s"]],
  })

  expect(rowList).toEqual([
    {
      solverName: "capacity",
      totalTimeMs: 0,
      p50TimeMs: 1200,
      p95TimeMs: 4600,
      successRatePercent: 92.5,
      relaxedDrcRatePercent: 90,
    },
  ])
})

test("parses previous-results cli option", () => {
  expect(
    getCliOptionsFromArgList([
      "--scenario-limit",
      "5",
      "--previous-results=results/benchmark-output.json",
    ]),
  ).toMatchObject({
    scenarioCountLimit: 5,
    previousResultsPath: "results/benchmark-output.json",
  })
})

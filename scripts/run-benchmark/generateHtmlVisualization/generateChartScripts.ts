import { generateChartConfig } from "scripts/run-benchmark/generateHtmlVisualization/generateChartConfig"
import { generatePerformanceRadarChart } from "scripts/run-benchmark/generateHtmlVisualization/generatePerformanceRadarChart"
import { generateSuccessRateChart } from "scripts/run-benchmark/generateHtmlVisualization/generateSuccessRateChart"
import { generateTimeChart } from "scripts/run-benchmark/generateHtmlVisualization/generateTimeChart"
import type { BenchmarkRow } from "types/run-benchmark/BenchmarkRow"

/**
 * Generates the chart initialization scripts with embedded benchmark data.
 */
export const generateChartScripts = (result_row_list: BenchmarkRow[]) => {
  return `<script>
    const benchmark_data = ${JSON.stringify(result_row_list)};
    ${generateChartConfig()}
    ${generateSuccessRateChart()}
    ${generateTimeChart()}
    ${generatePerformanceRadarChart()}
</script>`
}

/**
 * Generates the detailed metrics section with radar chart.
 */
export const generateDetailedMetrics = () => {
  return `<section class="mb-8">
    <h2 class="text-2xl font-semibold text-blue-300 mb-4">Detailed Metrics</h2>
    <benchmark-card title="Performance Comparison">
        <canvas id="performanceChart"></canvas>
    </benchmark-card>
</section>`
}

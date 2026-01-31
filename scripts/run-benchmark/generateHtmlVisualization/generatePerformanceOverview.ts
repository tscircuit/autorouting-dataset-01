/**
 * Generates the performance overview section with chart containers.
 */
export const generatePerformanceOverview = () => {
  return `<section class="mb-8">
    <h2 class="text-2xl font-semibold text-blue-300 mb-4">Performance Overview</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <benchmark-card title="Success Rate by Solver">
            <canvas id="successRateChart"></canvas>
        </benchmark-card>
        <benchmark-card title="Average Execution Time">
            <canvas id="timeChart"></canvas>
        </benchmark-card>
    </div>
</section>`
}

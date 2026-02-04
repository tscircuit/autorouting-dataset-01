/**
 * Generates the HTML header section with benchmark title and scenario count.
 */
export const generateHeader = (summary_json: { scenarioCount: number }) => {
  return `<header class="mb-8">
    <h1 class="text-4xl font-bold text-blue-600 mb-2">Autorouting Benchmark Results</h1>
    <p class="text-gray-600">Total Scenarios: ${summary_json.scenarioCount}</p>
</header>`
}

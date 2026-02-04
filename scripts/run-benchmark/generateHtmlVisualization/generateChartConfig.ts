/**
 * Generates the base Chart.js configuration for styling.
 */
export const generateChartConfig = () => {
  return `const chart_config = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                labels: { color: '#1f2937' }
            }
        },
        scales: {
            y: {
                ticks: { color: '#4b5563' },
                grid: { color: '#e5e7eb' }
            },
            x: {
                ticks: { color: '#4b5563' },
                grid: { color: '#e5e7eb' }
            }
        }
    };`
}

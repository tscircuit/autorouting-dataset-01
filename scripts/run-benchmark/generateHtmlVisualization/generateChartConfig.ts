/**
 * Generates the base Chart.js configuration for styling.
 */
export const generateChartConfig = () => {
  return `const chart_config = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                labels: { color: '#e5e7eb' }
            }
        },
        scales: {
            y: {
                ticks: { color: '#9ca3af' },
                grid: { color: '#374151' }
            },
            x: {
                ticks: { color: '#9ca3af' },
                grid: { color: '#374151' }
            }
        }
    };`
}

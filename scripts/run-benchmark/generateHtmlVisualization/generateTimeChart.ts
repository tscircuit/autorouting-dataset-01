/**
 * Generates the execution time comparison bar chart initialization script.
 */
export const generateTimeChart = () => {
  return `new Chart(document.getElementById('timeChart'), {
        type: 'bar',
        data: {
            labels: benchmark_data.map(row => row.solverName),
            datasets: [
                {
                    label: 'P50 Time (ms)',
                    data: benchmark_data.map(row => row.p50TimeMs || 0),
                    backgroundColor: 'rgba(34, 197, 94, 0.6)',
                    borderColor: 'rgba(34, 197, 94, 1)',
                    borderWidth: 1
                },
                {
                    label: 'P95 Time (ms)',
                    data: benchmark_data.map(row => row.p95TimeMs || 0),
                    backgroundColor: 'rgba(234, 179, 8, 0.6)',
                    borderColor: 'rgba(234, 179, 8, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: chart_config
    });`
}

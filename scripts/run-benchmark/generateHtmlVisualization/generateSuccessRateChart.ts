/**
 * Generates the success rate bar chart initialization script.
 */
export const generateSuccessRateChart = () => {
  return `new Chart(document.getElementById('successRateChart'), {
        type: 'bar',
        data: {
            labels: benchmark_data.map(row => row.solverName),
            datasets: [{
                label: 'Success Rate (%)',
                data: benchmark_data.map(row => row.successRatePercent),
                backgroundColor: 'rgba(59, 130, 246, 0.6)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 1
            }]
        },
        options: {
            ...chart_config,
            scales: {
                ...chart_config.scales,
                y: {
                    ...chart_config.scales.y,
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });`
}

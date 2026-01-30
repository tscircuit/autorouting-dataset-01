/**
 * Generates the multi-dimensional performance radar chart initialization script.
 */
export const generatePerformanceRadarChart = () => {
  return `new Chart(document.getElementById('performanceChart'), {
        type: 'radar',
        data: {
            labels: ['Success Rate', 'Relaxed DRC Rate', 'Speed (inverse P50)', 'Consistency (inverse P95)', 'Overall'],
            datasets: benchmark_data.map((row, index) => {
                const colors = [
                    'rgba(59, 130, 246, 0.6)',
                    'rgba(34, 197, 94, 0.6)',
                    'rgba(234, 179, 8, 0.6)',
                    'rgba(239, 68, 68, 0.6)',
                    'rgba(168, 85, 247, 0.6)'
                ];
                const max_time = Math.max(...benchmark_data.map(r => r.p50TimeMs || 0));
                const max_p95 = Math.max(...benchmark_data.map(r => r.p95TimeMs || 0));
                return {
                    label: row.solverName,
                    data: [
                        row.successRatePercent,
                        row.relaxedDrcRatePercent || 0,
                        row.p50TimeMs ? ((max_time - row.p50TimeMs) / max_time) * 100 : 0,
                        row.p95TimeMs ? ((max_p95 - row.p95TimeMs) / max_p95) * 100 : 0,
                        (row.successRatePercent + (row.relaxedDrcRatePercent || 0)) / 2
                    ],
                    backgroundColor: colors[index % colors.length],
                    borderColor: colors[index % colors.length].replace('0.6', '1'),
                    borderWidth: 2
                };
            })
        },
        options: {
            ...chart_config,
            scales: {
                r: {
                    angleLines: { color: '#374151' },
                    grid: { color: '#374151' },
                    pointLabels: { color: '#9ca3af' },
                    ticks: { 
                        color: '#9ca3af',
                        backdropColor: 'transparent'
                    },
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });`
}

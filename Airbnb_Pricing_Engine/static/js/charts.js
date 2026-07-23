// ============================================
// CHARTS.JS - PriceWise Airbnb Pricing Engine
// Midnight Aurora Theme
// ============================================

Chart.defaults.color = '#A0AEC0';
Chart.defaults.font.family = "'Space Grotesk', 'Segoe UI', sans-serif";

// ============================================
// PRICE BY NEIGHBORHOOD
// ============================================

function loadNeighborhoodChart() {
    const canvas = document.getElementById('neighborhoodChart');
    if (!canvas) return;
    
    fetch('/api/price_by_neighborhood')
        .then(res => res.json())
        .then(data => {
            new Chart(canvas, {
                type: 'bar',
                data: {
                    labels: Object.keys(data),
                    datasets: [{
                        label: 'Avg Price ($)',
                        data: Object.values(data),
                        backgroundColor: 'rgba(0, 212, 255, 0.6)',
                        borderColor: '#00D4FF',
                        borderWidth: 2,
                        borderRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { beginAtZero: true, ticks: { callback: v => '$' + v, color: '#A0AEC0' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                        x: { grid: { display: false }, ticks: { color: '#A0AEC0', maxRotation: 45 } }
                    }
                }
            });
        });
}

// ============================================
// FEATURE IMPORTANCE
// ============================================

function loadFeatureImportance() {
    const canvas = document.getElementById('featureChart');
    if (!canvas) return;
    
    fetch('/api/feature_importance')
        .then(res => res.json())
        .then(data => {
            const sorted = data.features.map((f, i) => ({ feature: f, importance: data.importances[i] }))
                .sort((a, b) => b.importance - a.importance);
            
            new Chart(canvas, {
                type: 'bar',
                data: {
                    labels: sorted.map(d => d.feature),
                    datasets: [{
                        label: 'Importance',
                        data: sorted.map(d => d.importance),
                        backgroundColor: 'rgba(123, 47, 252, 0.6)',
                        borderColor: '#7B2FFC',
                        borderWidth: 2,
                        borderRadius: 8
                    }]
                },
                options: {
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return (context.parsed.x * 100).toFixed(1) + '%';
                                }
                            }
                        }
                    },
                    scales: {
                        x: { beginAtZero: true, ticks: { callback: v => (v*100).toFixed(0) + '%', color: '#A0AEC0' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                        y: { grid: { display: false }, ticks: { color: '#A0AEC0' } }
                    }
                }
            });
        });
}

// ============================================
// CORRELATION
// ============================================

function loadCorrelationChart() {
    const canvas = document.getElementById('correlationChart');
    if (!canvas) return;
    
    fetch('/api/correlation')
        .then(res => res.json())
        .then(data => {
            const labels = data.labels.filter(l => l !== 'price');
            const values = data.values;
            
            const correlations = labels.map((label, i) => {
                const idx = data.labels.indexOf(label);
                return values[idx][0];
            });
            
            const colors = correlations.map(v => {
                if (v > 0.4) return 'rgba(0, 212, 255, 0.8)';
                if (v > 0.2) return 'rgba(0, 212, 255, 0.5)';
                if (v > -0.2) return 'rgba(255, 255, 255, 0.2)';
                if (v > -0.4) return 'rgba(255, 107, 157, 0.5)';
                return 'rgba(255, 107, 157, 0.8)';
            });
            
            new Chart(canvas, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Correlation with Price',
                        data: correlations,
                        backgroundColor: colors,
                        borderColor: 'rgba(255,255,255,0.1)',
                        borderWidth: 1,
                        borderRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return 'Correlation: ' + context.parsed.y.toFixed(3);
                                }
                            }
                        }
                    },
                    scales: {
                        y: { beginAtZero: false, min: -1, max: 1, ticks: { callback: v => v.toFixed(1), color: '#A0AEC0' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                        x: { grid: { display: false }, ticks: { color: '#A0AEC0', maxRotation: 45 } }
                    }
                }
            });
        });
}

// ============================================
// ROOM TYPE DISTRIBUTION
// ============================================

function loadRoomTypeChart() {
    const canvas = document.getElementById('roomTypeChart');
    if (!canvas) return;
    
    fetch('/api/room_type_distribution')
        .then(res => res.json())
        .then(data => {
            new Chart(canvas, {
                type: 'doughnut',
                data: {
                    labels: Object.keys(data),
                    datasets: [{
                        data: Object.values(data),
                        backgroundColor: ['#00D4FF', '#7B2FFC', '#FF6B9D'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: { color: '#A0AEC0', padding: 20, usePointStyle: true }
                        }
                    },
                    cutout: '70%'
                }
            });
        });
}

// ============================================
// INIT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('neighborhoodChart')) loadNeighborhoodChart();
    if (document.getElementById('featureChart')) loadFeatureImportance();
    if (document.getElementById('correlationChart')) loadCorrelationChart();
    if (document.getElementById('roomTypeChart')) loadRoomTypeChart();
    console.log('🌌 Charts initialized - Midnight Aurora Theme');
});
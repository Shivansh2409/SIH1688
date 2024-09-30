

const usageCtx = document.getElementById('usageChart').getContext('2d');
const usageChart = new Chart(usageCtx, {
    type: 'doughnut',
    data: {
        labels: ['Usage'],
        datasets: [{
            label: 'Usage',
            data: [66, 34],
            backgroundColor: ['#4bc0c0', '#ff6b6b'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%'
    }
});

const waterUsageCtx = document.getElementById('waterUsageChart').getContext('2d');
const waterUsageChart = new Chart(waterUsageCtx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
            label: 'Water Usage',
            data: [6.2, 6.4, 6.1, 6.5, 6.3],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: '#4bc0c0',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});


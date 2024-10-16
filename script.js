document.addEventListener('DOMContentLoaded', () => {
    
    // OVERALL RATING CHART

    var ctxRating = document.getElementById('ratingChart').getContext('2d');
    var ratingChart = new Chart(ctxRating, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Rating',
                data: [3.5, 3.6, 3.8, 4.0, 3.9, 4.1, 4.0, 4.0, 3.9, 3.8, 3.6, 4.0],
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

// REVIEW CHART

    var ctxReviews = document.getElementById('reviewsChart').getContext('2d');
    var reviewsChart = new Chart(ctxReviews, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Reviews',
                data: [50, 75, 150, 200, 180, 220, 250, 300, 280, 350, 400, 500],
                backgroundColor: 'rgba(40, 167, 69, 0.2)',
                borderColor: 'rgba(40, 167, 69, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});


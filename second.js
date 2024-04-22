document.addEventListener('DOMContentLoaded', function() {
    const previousPageBtn = document.getElementById('previousPageBtn');
    const nextPageBtn = document.getElementById('nextPageBtn');

    previousPageBtn.addEventListener('click', function() {
        // Check if the referrer URL is from first.html
        if (document.referrer && document.referrer.includes('first.html')) {
            window.history.back(); // Go back to the first.html page
        } else {
            window.location.href = 'first.html'; // Redirect to the first.html page
        }
    });

    nextPageBtn.addEventListener('click', function() {
        window.location.href = 'third.html'; // Redirect to the next page
    });
});

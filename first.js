document.addEventListener('DOMContentLoaded', function() {
    const previousPageBtn = document.getElementById('previousPageBtn');
    const nextPageBtn = document.getElementById('nextPageBtn');

    previousPageBtn.addEventListener('click', function() {
        // Check if the current page is not the first.html page
        if (document.referrer && document.referrer.includes('first.html')) {
            window.history.back(); // Go back to the first.html page
        } else {
            window.location.href = 'index.html'; // Redirect to the index.html page
        }
    });

    nextPageBtn.addEventListener('click', function() {
        window.location.href = 'second.html'; // Redirect to the next page
    });
});

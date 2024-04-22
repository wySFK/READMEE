document.addEventListener('DOMContentLoaded', function() {
    const previousPageBtn = document.getElementById('previousPageBtn');
    const nextPageBtn = document.getElementById('nextPageBtn');

    previousPageBtn.addEventListener('click', function() {
        window.location.href = 'fifth.html'; // Redirect to the second.html page
    });

    nextPageBtn.addEventListener('click', function() {
        window.location.href = 'seventh.html'; // Redirect to the next page
    });
});

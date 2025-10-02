
document.addEventListener('DOMContentLoaded', function() {
    // Show preloader for 3 seconds, then hide it and show main content
    setTimeout(function() {
        const preloader = document.getElementById('preloader');
        if (preloader) preloader.style.display = 'none';
        const mainContent = document.getElementById('main-content');
        if (mainContent) mainContent.style.display = 'block';
    }, 2000);
});

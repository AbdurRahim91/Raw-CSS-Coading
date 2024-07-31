document.getElementById('toggleBtn').addEventListener('click', function() {
    const details = document.querySelector('.details');
    if (details.classList.contains('expanded')) {
        details.classList.remove('expanded');
        this.textContent = 'See More';
    } else {
        details.classList.add('expanded');
        this.textContent = 'See Less';
    }
});

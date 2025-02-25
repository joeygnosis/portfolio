const hamburgerButton = document.getElementById('navbar');
const navList = document.getElementById('nav-list');

hamburgerButton.addEventListener('click', () => {
    navList.classList.toggle('show');
});

// Close menu when clicking a link or outside the menu
document.addEventListener('click', (e) => {
    if (navList.classList.contains('show') && 
        !navList.contains(e.target) && 
        !hamburgerButton.contains(e.target)) {
        navList.classList.remove('show');
    }
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navList.classList.contains('show')) {
        navList.classList.remove('show');
    }
});
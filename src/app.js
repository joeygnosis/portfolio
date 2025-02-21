const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('#nav-list');

// Toggle menu
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navList.classList.toggle('active');
    // Optional: Toggle aria-expanded for accessibility
    hamburger.setAttribute('aria-expanded', 
        navList.classList.contains('active'));
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navList.classList.contains('active') && 
        !navList.contains(e.target) && 
        !hamburger.contains(e.target)) {
        navList.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});

// Close menu when clicking a link
navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navList.classList.contains('active')) {
        navList.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});
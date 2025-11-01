// DOM Elements
const hamburgerButton = document.getElementById('navbar');
const navList = document.getElementById('nav-list');

if (!hamburgerButton || !navList) {
    console.error('Required navigation elements not found');
} else {
    // Toggle menu on hamburger button click
    hamburgerButton.addEventListener('click', (event) => {
        event.preventDefault();
        navList.classList.toggle('show');
    });

    // Close menu when clicking outside or on a link
    document.addEventListener('click', (event) => {
        const isMenuOpen = navList.classList.contains('show');
        const clickedOutside = !navList.contains(event.target) && !hamburgerButton.contains(event.target);
        
        if (isMenuOpen && clickedOutside) {
            navList.classList.remove('show');
        }
    });
}

// Close menu on escape key press
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navList.classList.contains('show')) {
        navList.classList.remove('show');
    }
});
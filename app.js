const navbarButton = document.getElementById('navbar')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

navbarButton.addEventListener('click', toggleButton)
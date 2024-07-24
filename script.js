let sidebarToggle = document.querySelector('.sidebar-toggle');
let sideBar = document.querySelector('.sidebar');
let closeButton = document.querySelector('.close-button')

sidebarToggle.addEventListener('click', () => {
    sideBar.classList.toggle('active');
})

closeButton.addEventListener('click', () => {
    sideBar.classList.remove('active');
})
const toggleButton = document.querySelector(".toggle-button")
const navItems = document.querySelector(".nav-items-one")
const close = document.querySelector(".close")
const home = document.querySelector(".home")
toggleButton.addEventListener('click', () => {
    navItems.classList.toggle("active")
    toggleButton.classList.add("close")
    close.classList.remove("close")
})


home.addEventListener('click', () => {
    navItems.classList.remove("active")
})
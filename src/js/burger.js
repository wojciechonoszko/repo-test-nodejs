const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
    menuIcon.classList.toggle('hamburger-menu--opened');
})
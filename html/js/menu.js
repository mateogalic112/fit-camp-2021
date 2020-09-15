const burgerMenu = document.querySelector('.c-header__burger-menu');
const menuNav = document.querySelector('.c-header__nav');
const menuBg = document.querySelector('.c-header__burger-bg');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle("c-header__menu-change");
    menuNav.classList.toggle("c-header__menu-change");
    menuBg.classList.toggle("c-header__menu-change");
});
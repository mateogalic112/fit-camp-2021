
const header = document.querySelector('.c-header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        header.classList.add('c-header--bg');
    } else {
        header.classList.remove('c-header--bg');
    }
});

const menuBurg = document.querySelector('.burger');

const navMobile = document.querySelector('.hero-nav--mobile');

menuBurg.addEventListener('click', function() {
    menuBurg.classList.toggle('burger--opened')
    navMobile.classList.toggle('hero-nav--mobile-active')
});

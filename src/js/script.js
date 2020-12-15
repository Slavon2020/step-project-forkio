const menuBurg = document.querySelector('.burger');
const navMobile = document.querySelector('.hero-nav--mobile');

function navMobileToggle() {
    menuBurg.classList.toggle('burger--opened');
    navMobile.classList.toggle('hero-nav--mobile-active');
}

menuBurg.addEventListener('click', function () {
    navMobileToggle();
});

document.body.addEventListener('click', function (e) {
    const target = e.target;
    if (navMobile.classList.contains('hero-nav--mobile-active') && !navMobile.contains(target) && !menuBurg.contains(target)) {
        navMobileToggle();
    }
});

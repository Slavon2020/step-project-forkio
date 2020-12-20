const menuBurg = document.querySelector('.burger');
const navMobile = document.querySelector('.hero-nav');

function navMobileToggle() {
    menuBurg.classList.toggle('burger--opened');
    navMobile.classList.toggle('hero-nav--active');
}

menuBurg.addEventListener('click', function () {
    navMobileToggle();
});

document.body.addEventListener('click', function (e) {
    const target = e.target;
    if (navMobile.classList.contains('hero-nav--active') && !navMobile.contains(target) && !menuBurg.contains(target)) {
        navMobileToggle();
    }
});

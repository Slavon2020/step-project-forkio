const menuBurg = document.querySelector('.burger');
const navMobile = document.querySelector('.hero-nav--mobile');

menuBurg.addEventListener('click', function() {
    menuBurg.classList.toggle('burger--opened')
    navMobile.classList.toggle('hero-nav--mobile-active')
});

//
// document.body.addEventListener('click', function (e) {
//     const target = e.target;
//     if ( navMobile.classList.contains('hero-nav--mobile-active') && target !== menuBurg && target !== navMobile)
//     // navMobile.classList.remove('hero-nav--mobile-active')
//     console.log(target);
//     console.log(menuBurg);
// });

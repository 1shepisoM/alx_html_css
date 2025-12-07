const hamburger = document.getElementById('hamburger-btn');
const mobileNav = document.getElementById('mobile-nav');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('show');
});

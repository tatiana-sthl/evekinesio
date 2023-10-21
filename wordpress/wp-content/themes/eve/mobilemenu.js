document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuWrapper = document.querySelector('.menu-wrapper');

    hamburgerMenu.addEventListener('click', function() {
        menuWrapper.classList.toggle('active');
    });
});

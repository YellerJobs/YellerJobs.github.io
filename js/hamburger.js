// hamburger.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navUl.classList.toggle('show');
    });
});
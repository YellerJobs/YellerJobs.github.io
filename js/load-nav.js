// load-nav.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            console.log('Navigation loaded');
            setupHamburgerMenu(); // קורא לפונקציה אחרי שהניווט נטען
        })
        .catch(error => console.error('Error loading navigation:', error));
});

function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        console.log('Hamburger and nav menu found');
        hamburger.addEventListener('click', function() {
    console.log('Hamburger clicked');
    this.classList.toggle('active');
    navMenu.classList.toggle('show');
    console.log('Nav menu classes:', navMenu.classList);
});
    } else {
        console.error('Hamburger or nav menu not found');
    }
}
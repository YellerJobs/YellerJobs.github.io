function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        console.log('Hamburger and nav menu found'); // הוסף את זה לבדיקה
        hamburger.addEventListener('click', function() {
            console.log('Hamburger clicked');
            this.classList.toggle('active');
            navMenu.classList.toggle('show');
        });
    } else {
        console.error('Hamburger or nav menu not found');
    }
}

// נסה להגדיר את התפריט מיד כשהקובץ נטען
setupHamburgerMenu();

// נסה שוב אחרי שהדף נטען במלואו
document.addEventListener('DOMContentLoaded', setupHamburgerMenu);

console.log('hamburger.js loaded');

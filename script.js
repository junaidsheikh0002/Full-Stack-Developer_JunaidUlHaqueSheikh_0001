/* script.js */

/* Mobile Navigation Toggle */
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const navToggle = document.createElement('div');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';

    const nav = document.querySelector('.nav');
    nav.insertBefore(navToggle, nav.querySelector('.nav-links'));

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
});

/* Smooth Scrolling */
const links = document.querySelectorAll('.nav-link');

for (const link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);

    window.scrollTo({
        top: target.offsetTop - 60, // Adjust for fixed header height
        behavior: "smooth"
    });
}s
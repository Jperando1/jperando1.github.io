// Dynamically set the copyright year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Change navbar styling on scroll for a polished look
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});
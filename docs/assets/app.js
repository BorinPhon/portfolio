// JavaScript to toggle the mobile menu
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.mobile-menu');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    mobileMenu.classList.toggle('open'); // Optional: toggle open class for animation
});

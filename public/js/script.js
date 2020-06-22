const showMenu = document.getElementById('showMenu');
const navMenu = document.getElementById('navMenu');
const closeMenu = document.getElementById('closeMenu');

showMenu.addEventListener('click', function () {
    navMenu.classList.toggle('hidden');
    this.classList.toggle('hidden');
    closeMenu.classList.toggle('hidden');
});

closeMenu.addEventListener('click', function () {
    navMenu.classList.toggle('hidden');
    this.classList.toggle('hidden');
    showMenu.classList.toggle('hidden');
});
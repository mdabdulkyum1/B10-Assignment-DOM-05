
// toggle nav menu
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const dropMenu = document.getElementById('drop-menu');
menuOpen.addEventListener('click', function(){
    menuOpen.classList.add('hidden');
    menuClose.classList.remove('hidden');
    dropMenu.classList.remove('hidden');
})
menuClose.addEventListener('click', function(){
    menuClose.classList.add('hidden');
    menuOpen.classList.remove('hidden');
    dropMenu.classList.add('hidden');
})
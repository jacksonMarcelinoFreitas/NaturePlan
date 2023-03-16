const btnOpenMenu = document.querySelector('.open-menu-icon');
const btnCloseMenu = document.querySelector('.close-menu-icon'); 
// const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');

btnOpenMenu.addEventListener('click', openMenu);
btnCloseMenu.addEventListener('click', closeMenu);

function openMenu(){
    btnOpenMenu.classList.add('hide');
    btnCloseMenu.classList.remove('hide');
    // nav.classList.add('active');
    menu.classList.add('active');
}

function closeMenu(){
    btnOpenMenu.classList.remove('hide');
    btnCloseMenu.classList.add('hide');
    // nav.classList.remove('active');
    menu.classList.remove('active');
}
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon')
const navBar = document.querySelector('.nav-div');
const overlay = document.querySelector('.overlay');

menu.addEventListener('click', () => {
    navBar.style.width = '245px';
    menu.style.display = 'hidden';
    overlay.style.display = 'block';
});

close.addEventListener('click', () => {
    navBar.style.width = '0px';
    menu.style.display = '';
    overlay.style.display = 'none';
});
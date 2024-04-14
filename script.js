const hamMenu = document.querySelector('.hamburger');

const offScreenMenu = document.querySelector('.offscreen');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

const closeMenu1 = document.querySelector('.close1');

closeMenu1.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});


const closeMenu2 = document.querySelector('.close2');

closeMenu2.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});


const closeMenu3 = document.querySelector('.close3');

closeMenu3.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});
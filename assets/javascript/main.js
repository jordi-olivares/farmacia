const menuUsuarios=document.querySelector('.menu-usuario');
const menuBurger=document.querySelector('.menu-burger')
const usuarios=document.querySelector('#usuarios');
const burger=document.querySelector('#burger')
usuarios.addEventListener('click',SHUsuarios);
burger.addEventListener('click',SHBurger);

function SHUsuarios() {
    menuBurger.classList.remove('is-active');
    if (menuUsuarios.classList.contains('is-active')) {
        menuUsuarios.classList.remove('is-active');
    } else {
        menuUsuarios.classList.add('is-active');
    }
}

function SHBurger() {
    menuUsuarios.classList.remove('is-active');
    if (menuBurger.classList.contains('is-active')) {
        menuBurger.classList.remove('is-active');
    } else {
        menuBurger.classList.add('is-active');
    }
} 

//Version desktop
const Iusuarios=document.querySelector('#u-ipad');
const Iburger=document.querySelector('#m-ipad')
Iusuarios.addEventListener('click',ISHUsuarios);
Iburger.addEventListener('click',ISHBurger);

function ISHUsuarios() {
    menuBurger.classList.remove('is-active');
    if (menuUsuarios.classList.contains('is-active')) {
        menuUsuarios.classList.remove('is-active');
    } else {
        menuUsuarios.classList.add('is-active');
    }
}

function ISHBurger() {
    menuUsuarios.classList.remove('is-active');
    if (menuBurger.classList.contains('is-active')) {
        menuBurger.classList.remove('is-active');
    } else {
        menuBurger.classList.add('is-active');
    }
} 

var burger = document.getElementById("burger");
var menu = document.getElementById("menu");
burger.addEventListener('click', function(){
    if ((menu.classList.contains('menu-opened'))&&(burger.classList.contains('burger-active'))) {
        menu.classList.remove('menu-opened');
        burger.classList.remove('burger-active');
    } else {
        menu.classList.add('menu-opened');
        burger.classList.add('burger-active');
    }
});
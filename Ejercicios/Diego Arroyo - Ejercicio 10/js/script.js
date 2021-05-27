//Variables de selección
var btn_menu_mob = document.querySelector('#btn_menu_mob');
var menu_mob = document.querySelector('#menu_mob');



//Metodos

btn_menu_mob.addEventListener('click', function () {

    menu_mob.classList.toggle("js-d-block");
    btn_menu_mob.classList.toggle("js-btn-gold");


});
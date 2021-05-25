// Variables de seleccion
var btn_color = document.querySelector('#btn_color');
var caja1 = document.querySelector('#caja1');
var btn_tam = document.querySelector('#btn_tam');
var caja2 = document.querySelector('#caja2');
var btn_form = document.querySelector('#btn_form');
var caja3 = document.querySelector('#caja3');
var caja4 = document.querySelector('#caja4');
var caja4 = document.querySelector('#caja4');




//Métodos

//Cambio color caja1
btn_color.addEventListener('click', function () {
    // Codigo
    caja1.style.backgroundColor = "#333"
});

/* Cambio dimensiones caja2 */
btn_tam.addEventListener('mouseenter', function () {
    caja2.style.width = "300px";
    caja2.style.height = "300px";
});

btn_tam.addEventListener('mouseleave', function () {
    caja2.style.width = "150px";
    caja2.style.height = "150px";
});

/* Cambio forma caja3 */
btn_form.addEventListener('click', function () {
    caja3.style.borderRadius = "50%";
});
/* Ocultar caja4 */
caja4.addEventListener('mouseenter', function () {
    caja4.style.backgroundColor = "black";
})
caja4.addEventListener('mouseleave', function () {
    caja4.style.backgroundColor = "white"
});
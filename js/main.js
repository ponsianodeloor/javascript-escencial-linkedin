"use strict";

//Validación de elementos de un arreglo
var resultado = null;
var menu = [
 {nombre: "Ceviche", precio: 20, pais:"Ecuador"},
 {nombre: "Tacos", precio: 30, pais:"Mexico"},
 {nombre: "pasta", precio: 40, pais:"Italia"},
 {nombre: "frejoles", precio: 15, pais:"Mexico"}
];

resultado = menu.some(platillo => platillo.precio < 20);
console.log('Hay platillos de 20 Dolares', resultado);


resultado = menu.every(platillo => platillo.precio < 50);
console.log('Hay platillos que cuesten menos de 50 Dolares', resultado);

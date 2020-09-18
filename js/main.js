"use strict";

//Busqueda en un arreglo
var platillos = ["Ceviche", "Tacos", "pasta"];

var menu = [
 {nombre: "Ceviche", precio: 20, pais:"Ecuador"},
 {nombre: "Tacos", precio: 30, pais:"Mexico"},
 {nombre: "pasta", precio: 40, pais:"Italia"}
];

var numPlatillo = platillos.findIndex(platillo => platillo =='Tacos');
console.log("Platillo Numero: " + numPlatillo);

numPlatillo = menu.findIndex(platillo => platillo.nombre =='pasta');
console.log("Platillo Numero: " + numPlatillo);

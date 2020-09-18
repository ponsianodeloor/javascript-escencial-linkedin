"use strict";

//Busqueda en un arreglo
var platillos = ["Ceviche", "Tacos", "pasta"];
var platilloElegido = platillos.find(platillo => platillo == "pasta");

console.log(platilloElegido);

var menu = [
 {nombre: "Ceviche", precio: 20, pais:"Ecuador"},
 {nombre: "Tacos", precio: 30, pais:"Mexico"},
 {nombre: "pasta", precio: 40, pais:"Italia"}
];

platilloElegido = menu.find(platillo => platillo.nombre == "Ceviche");

console.log(platilloElegido);

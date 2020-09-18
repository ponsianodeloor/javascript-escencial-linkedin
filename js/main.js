"use strict";

//Filtrar arreglos

var menu = [
 {nombre: "Ceviche", precio: 20, pais:"Ecuador"},
 {nombre: "Tacos", precio: 30, pais:"Mexico"},
 {nombre: "pasta", precio: 40, pais:"Italia"},
 {nombre: "frejoles", precio: 15, pais:"Mexico"}
];

var resultado = null;
resultado = menu.find(platillo => platillo.pais == "Mexico");
console.log(resultado);
resultado = menu.filter(platillo => platillo.pais == "Mexico");
console.log(resultado);

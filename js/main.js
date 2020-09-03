"use strict";

//Desestructuracion de arreglos
var platillos = ["Ceviche", "Tacos", "pasta"];
/*
var platillo1 = platillos[0];
var platillo2 = platillos[1];
var platillo3 = platillos[2];
*/

/*
var platillo1 = null;
var platillo2 = null;
var platillo3 = null;
*/

var [platillo1, platillo2, platillo3] = platillos;

console.log(platillo1, platillo2, platillo3);

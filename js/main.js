"use strict";

var a = 10;
var b = 20;

var resultado = "Sin datos";

if (a > b) {
 resultado = "La condición se cumplió";
}else if (a == b) {
 resultado = "La segunda condicion se verdadera ";
}
else {
 resultado = "La condicion no se cumplió";
}

console.log('el resultado de la evaluacion if-else if -else es ', resultado);

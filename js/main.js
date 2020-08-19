"use strict";

var a = 30;
var b = 20;
var c = 40;

var resultado = "Sin datos";

if (a > b) {
 resultado = "La condición se cumplió";
 if (a < c) {
  resultado = "La condicion anidada se cumplio"
 }
}
else {
 resultado = "La condicion no se cumplió";
}

console.log('el resultado de la evaluacion if-else if -else es ', resultado);

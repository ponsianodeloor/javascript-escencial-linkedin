"use strict";

//functions arrows || fat arrow || Lambda

var saludar = nombre => "Hola " + nombre;

console.log(saludar('Ponsiano'));

var sumar = cantidad => cantidad + 20;
console.log(sumar(10));

var calcular = (a, b) => a+b;
console.log(calcular(15, 20));

var generar = (a, b) => {
 var c = 5;
 return a+b+c;
}

console.log(generar(6,7));

var validar = () => {
 return 'validacion correcta';
}

console.log(validar());

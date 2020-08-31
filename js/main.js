"use strict";

var mensaje = "Estoy aprendiendo Javascript y aprendiendo bien";

var resultado;

//match
resultado = mensaje.match(/aprendiendo/gi); //operador g que es global buscar todas y in case sensitive
console.log("match: " + resultado);

//substr
resultado = mensaje.substr(6,11); // devuelve aprendiendo
console.log("substr: " + resultado);
//substring
resultado = mensaje.substring(6,17); // devuelve aprendiendo y empieza desde la cadena
console.log("sustring: " + resultado);
//charAt
resultado = mensaje.charAt(3); //devuelve o
console.log("charAt: " + resultado);

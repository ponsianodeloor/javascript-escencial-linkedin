"use strict";

var mensaje = "Estoy aprendiendo Javascript y aprendiendo bien";

var resultado;

//startsWith comienza con
resultado = mensaje.startsWith("Es"); //devuelve true
console.log("startsWith: " + resultado);

var textoEn = mensaje.indexOf("Javascript");
resultado = mensaje.startsWith("Ja", textoEn); //busqueda a partir de posicion
console.log(resultado);

//endsWith termina con
resultado = mensaje.endsWith("bien"); //devuelve true
console.log("endsWith: " + resultado);

//includes
resultado = mensaje.includes("Javascript");
console.log("Includes: " + resultado);

"use strict";

var mensaje = "   Estoy aprendiendo Javascript y aprendiendo bien   ";

var resultado;

//repeat
resultado = mensaje.repeat(2);
console.log(resultado); //realiza las repeticiones

//replace
resultado = mensaje.replace("Javascript", "a programar");
console.log(resultado);

//slice
//resultado = mensaje.slice(6);
resultado = mensaje.slice(6, mensaje.length - 25);
console.log(resultado);

//split
resultado = mensaje.split(" ");
console.log(resultado);

//trim
resultado = mensaje.trim();
console.log(resultado);

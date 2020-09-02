"use strict";

//operaciones basicas en un arreglo

var platillos = ["Ceviche", "Bolon", "Fideos"];
console.log(platillos);

platillos.push("Tostadas");
platillos.push("Sopa");

console.log(platillos);

platillos.pop();
console.log(platillos);

var mensaje = platillos.join();
console.log(mensaje);

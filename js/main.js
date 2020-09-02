"use strict";

//operaciones basicas en un arreglo

//split()
var mensaje = "Ceviche, Tacos, pasta";
var platillos = mensaje.split(', ');
console.log(platillos);

//from
var platillosHTML = Array.from(document.querySelectorAll(".platillos p"));
platillos = platillosHTML.map(platillo => platillo.textContent)
console.log(platillos);

//of
platillos = Array.of("Ceviche", "Tacos", "Pasta");
console.log(platillos);

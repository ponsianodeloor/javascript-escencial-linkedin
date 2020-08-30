"use strict";

//temporizadores o timers

//set interval se cicla

var temporizador = setInterval(function () {
 setColor();
}, 2000);

//set timeout solo ocurre una vez
/*
setTimeout(function () {
 setColor();
}, 3000);
*/

function setColor(){
 var pagina = document.body;
 pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue";
}

function stopChangeColor(){
 clearInterval(temporizador);
}

"use strict";

//callbacks

function calcular(a, b, sumarCB, restarCB){
 var suma = a + b;
 var resta = a - b;
 sumarCB(suma);
 restarCB(resta);
}

calcular(
 2,
 3,
 function(resultado){
  console.log('Suma ', resultado);
 },
 function(resultado){
  console.log('Resta ', resultado)
 }
);

//calular(1,2,fn,fn);

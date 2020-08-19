"use strict";

//estructura swicth

var edad = 30;
var resultado = '';

switch (edad) {
 case 10:
  resultado = 'La edad es 10 años';
  break;

 case 20:
  resultado = 'La edad es 20 años';
  break;

 case 30:
  resultado = 'La edad es 30 años';
  break;
 default:
  resultado = 'ningun caso coincide';
}

console.log(resultado);

var producto = "TV";

switch (producto) {
 case "TV":
  resultado = 'se eligio la TV';
  break;
  case "Radio":
   resultado = 'se eligio la Radio';
   break;
   case "Telefono":
    resultado = 'se eligio la Telefono';
    break;
 default:
 resultado = 'No se eligio un producto';

}
console.log(resultado);

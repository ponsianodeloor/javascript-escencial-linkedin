"use strict";

//errores personalizados
var valor1 = 10;
var valor2 = 20;

try {
 if (valor1 > valor2) {
  console.log(`mensaje de validacion ${valor1} es mayor que ${valor2}`);
 }else {
  throw new Error(`${valor1} no es mayor que ${valor2}`);
 }
} catch (e) {
 console.log(e);
} finally {

}

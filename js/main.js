"use strict";

var productos = 5;
var contar_impares = 0;

for (var i = 0; i < productos; i++) {
 console.log("Producto #", i);
}

do{
 console.log('Producto vendido');
 productos--;
 debugger;
}while(productos >= 1)

for (var i = 0; i <= 20; i++) {
 if (i == 10) {
  break;
 }
 if (i % 2 == 0) {
   continue;
 }
 contar_impares++;
 console.log(i);
}

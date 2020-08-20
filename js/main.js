"use strict";

function saludar(nombre, edad){
 //var saludo = "hola mundo";
 //console.log(saludo);
 var resultado = nombre + " tiene " + edad + " años";
 return resultado;
}

var mensaje = saludar("Ponsiano", 30);

function contar(cantidad = 20){
 console.log('Total', cantidad);
}

//parametros rest
function cocinar(ingrediente_1, ingrediente_2, ...masingredientes){
 console.log('ingrediente 1', ingrediente_1);
 console.log('ingrediente 2', ingrediente_2);
 console.log('ingrediente 3', masingredientes);
}

cocinar("Pollo", "Tomate", "Pescado", "Chile", "Pimiento")

function cocinar_x_parametros(...masingredientes){
 console.log('ingredientes', masingredientes);
}

cocinar_x_parametros("Pollo", "Tomate", "Pescado", "Chile", "Pimiento");

//parametros spread
function cocinarSpread(ingrediente_1, ingrediente_2, ingrediente_3, ...otros){
 console.log('ingrediente 1', ingrediente_1);
 console.log('ingrediente 2', ingrediente_2);
 console.log('ingrediente 3', ingrediente_3);
 console.log('ingrediente otros', otros);
}
var ingredientesBase = ["Arroz, Pollo, Pimiento, Cebolla"];
cocinarSpread(...ingredientesBase, "Arroz", "Tomate", "Cebolla blanca");

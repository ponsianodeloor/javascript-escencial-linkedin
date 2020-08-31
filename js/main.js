"use strict";

var mensaje = "Estoy aprendiendo Javascript y aprendiendo bien";

var resultado;

//indexof
resultado = mensaje.indexOf('aprendiendo'); //nos encuentra la primera incidencia ASC
console.log('indexOf ' + resultado);

//lastIndexof
resultado = mensaje.lastIndexOf('aprendiendo'); //nos encuentra la primera incidencia DESC
console.log('lastIndexOf ' + resultado);

//search
resultado = mensaje.search('aprendiendo'); //nos encuentra la primera incidencia
console.log('search ' + resultado);

//search
resultado = mensaje.search(/ja/i); // la i es para in case sensitive
console.log('search case sensitive ' + resultado);

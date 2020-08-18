"use strict";

//JSON Javascript Object Notation Douglas Crockford Javascript The Good Parts

var persona = {nombre: "Ponsiano", twitter: 'ponsianodeloor'};

var personas = [
 {nombre: "Ponsiano", twitter: 'ponsianodeloor'},
 {nombre: "Thomas", twitter: 'thomasloor'},
 {nombre: "PR7", twitter: 'pr7'},
 persona
];

//esto sirve para enviar datos a un servidor o guardar localmente
var personaJson = JSON.stringify(persona);

//esto sirve para recibir datos y parsearlos
var personaJsonRecibir = JSON.parse(personaJson);

"use strict";

var boton = document.getElementById('boton');

var todosLosParrafos = document.getElementsByTagName('p');
var parrafosPorClase = document.getElementsByClassName('principal')[0].textContent;

var foto = document.createElement('img');
foto.src = "img/foto1.jpg";
foto.name = "Foto1";
foto.width = 400;
document.body.appendChild(foto);

foto.addEventListener('click', function(){
 if (foto.name === "Foto1") {
  foto.src = "img/foto2.jpg";
  foto.name = "Foto2";
 }else {
  foto.src = "img/foto1.jpg";
  foto.name = "Foto1";
 } //dentro de la condicion podemos indicar con la propiedad this ejm: this.name ==="Foto1"
});

boton.addEventListener('click', function(){
  console.log(todosLosParrafos);
  console.log(parrafosPorClase);
  this.style.backgroundColor = "Black";
  this.style.color = "White";
});

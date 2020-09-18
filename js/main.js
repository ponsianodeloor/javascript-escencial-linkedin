"use strict";

var boton = document.getElementById('boton');

var todosLosParrafos = document.getElementsByTagName('p');
var parrafosPorClase = document.getElementsByClassName('principal')[0];
console.log('Height', window.innerHeight);
console.log('Height', window.innerWidth);

localStorage.setItem('email', 'el email es ponsianodeloor@gmail.com');

boton.addEventListener('click', function(){
 var email = localStorage.getItem('email');
 console.log('El email de localStorage es :', email);
 parrafosPorClase.innerHTML = email;
});

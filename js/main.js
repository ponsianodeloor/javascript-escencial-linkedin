"use strict";

const boton = document.querySelector('.boton');


boton.addEventListener('click', function(){
 console.log('Boton pulsado');
 //console.log(this.innerHTML);
});

boton.addEventListener('mouseover', function(){
 console.log('El mouse esta sobre el boton');
 //console.log(this.innerHTML);
});

boton.addEventListener('mouseout', function(){
 console.log('El mouse esta fuera el boton');
 //console.log(this.innerHTML);
});

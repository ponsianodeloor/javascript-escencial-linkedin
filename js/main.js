"use strict";

const boton = document.querySelector('.boton');

boton.addEventListener('click', function(){
 //console.log('Boton pulsado');
 console.log(this.innerHTML);
});

boton.addEventListener('click', () => {
 console.log(this);
 this.location = 'https://apptics.com.ec'
});

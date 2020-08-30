"use strict";

//eventos multimedia
const video = document.querySelector('.laravelVideo');

video.addEventListener("play", function(){
 console.log('El video ha iniciado');
});

video.addEventListener("seeking", function(){
 console.log('Se esta buscando en el video', this.currentTime);
});

video.addEventListener("ended", function(){
 console.log('El video ha terminado');
});

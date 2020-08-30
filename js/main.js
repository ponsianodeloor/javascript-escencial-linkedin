"use strict";

//ventana de alerta

var video = document.querySelector(".laravelVideo");

video.addEventListener('ended', function functionName() {
 //alert('Video Finalizado \n salto de linea'); //alerta
 let resultado = confirm("Deseas ver el video nuevamente");
 console.log(resultado); //true o false
 if (resultado) {
  var email = prompt('Escribe tu email para ver mas videos');
  console.log(email);
  video.play();
 }else {
  window.location = "https://apptics.com.ec"
 }
});

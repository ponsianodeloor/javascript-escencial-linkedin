"use strict";

//obtener datos con fetch

var boton = document.getElementById('boton');
var contenedor = document.getElementById('container');
var post = null;

boton.addEventListener('click', function(){
 fetch("https://jsonplaceholder.typicode.com/posts").then(data => data.json()).then(data =>{
  post = data;
  mostrarDatos(post);
 });
});

function mostrarDatos(){
 post.map((post, i)=>{
  let titulo = document.createElement('h1');
  let contenido = document.createElement('p');

  titulo.innerHTML = (i +1) + " - " + post.title;
  contenido.innerHTML = post.body;

  contenedor.appendChild(titulo);
  contenedor.appendChild(contenido);
 });
}

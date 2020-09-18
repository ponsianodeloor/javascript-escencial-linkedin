"use strict";

//obtener datos con fetch

var boton = document.getElementById('boton');
var contenedor = document.getElementById('container');
var contenedorBanderas = document.getElementById('banderas');
var post = null;

boton.addEventListener('click', function(){
 getPost().then(data => data.json()).then(data =>{
  post = data;
  mostrarDatos(post);
  return getCountries();
 }).then(data => data.json()).then(countries =>{
  mostrarBanderas(countries);
 }).catch(error => {
     mensaje.classList.toggle('hide');
     mensaje.innerHTML = error;
     setTimeout(()=>mensaje.classList.toggle('hide'), 5000);
 });
});

function getPost(){
 return fetch("https://jsonplaceholder.typicode.comm/posts");
}

function getCountries(){
 return fetch("https://restcountries.eu/rest/v2/all");
}

function mostrarBanderas(countries){
 contenedorBanderas.innerHTML = "";

 countries.map((country, i)=>{
  let bandera = document.createElement('img');

  bandera.src = country.flag;
  bandera.width = '20';
  bandera.height = '20';
  bandera.title = country.name;

  contenedorBanderas.appendChild(bandera);
 });
}

function mostrarDatos(){
 contenedor.innerHTML = "";
 post.map((post, i)=>{
  let titulo = document.createElement('h1');
  let contenido = document.createElement('p');

  titulo.innerHTML = (i +1) + " - " + post.title;
  contenido.innerHTML = post.body;

  contenedor.appendChild(titulo);
  contenedor.appendChild(contenido);
 });
}

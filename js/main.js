"use strict";

//trabajando con clases

class Pantalla{
 constructor(marca, modelo, pulgadas){
  this.marca = marca;
  this.modelo = modelo;
  this.pulgadas = pulgadas;
 }

 set peso(value){
  this.kgs = value.trim();
 }
 get peso(){
  return this.kgs;
 }
 encender(){
  console.log(`La pantalla: marca ${this.marca} se ha encendido`);
 }
 volumen(){
  console.log(`El volumen se ha modificado`);
 }
 info(){
  console.log(`La informacion de la tv es la siguiente: marca ${this.marca} modelo ${this.modelo} pulgadas ${this.pulgadas}`);
 }
}

const tvSala = new Pantalla('Samsung', 'Curve', '52');
const tvHabitacion = new Pantalla('LG', 'LSD', '30');

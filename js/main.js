"use strict";

//herencia
class Producto{
 constructor(numSerie){
  this.numSerie = numSerie;
  this.tiempoGarantia = 100;
 }

 static get infoTienda(){
  console.log('Productos de la tienda AppTics.com.ec');
 }

 set garantia(value){
  this.tiempoGarantia -= value;
 }

 get garantia(){
  return this.tiempoGarantia;
 }
}

class Pantalla extends Producto{
 constructor(numSerie, marca, modelo, pulgadas){
  super(numSerie);
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
  this.garantia = 1;
  console.log(`La pantalla: marca ${this.marca} se ha encendido`);
 }
 volumen(){
  console.log(`El volumen se ha modificado`);
 }
 info(){
  console.log(`La informacion de la tv es la siguiente: marca ${this.marca} modelo ${this.modelo} pulgadas ${this.pulgadas}`);
 }
}

const tvSala = new Pantalla('12345','Samsung', 'Curve', '52');
const tvHabitacion = new Pantalla('32123','LG', 'LSD', '30');

"use strict";

var simbolo1 = Symbol();
var simbolo2 = Symbol();

if (simbolo1 == simbolo2) {
 console.log(true);
}else {
 console.log(false);
}

var ambiente = Symbol('dev');
console.log(ambiente);

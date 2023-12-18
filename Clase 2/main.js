/* 
valores booleanos
true
false

= asignación
== comparación solo de valor
=== comparacion tanto de tipo como de valor

Boolean(0) => false
Boolean(-1) => true
Boolean("") => false
Boolean("andres") => true
*/

/* 
estructura del condicional if

if(condicion o un valor (true/false)){
  código a ejecutar si la condición o el valor es true
}
*/

// if (false) {
//   console.log("Entramos");
// }

// console.log("Finalizamos");

// if (-20) {
//   console.log("entramos");
// }

// if ("") {
//   console.log("entramos");
// }

// if ("andres") {
//   console.log("entramos");
// }

// let nombre = prompt("Ingrese el nombre del usuario");

// if (nombre === "andres") {
//   alert("Eres andres");
// }

/* 
estructura del if else

if(condicion){
  código a ejecutar cuando la condición es verdadera
}else{
  código a ejecutar cuando la condición es falsa
}
*/

// let respuesta = prompt("Terminaste la tarea?").toLowerCase();

// if (respuesta === "si") {
//   alert("Puedes salir a jugar");
// } else {
//   alert("No puedes salir a jugar");
// }

// let edad = Number(prompt("Ingrese su edad"));

// if (edad >= 18) {
//   alert("Puedes ingresar a la fiesta");
// } else {
//   alert("No puedes entrar a al fiesta");
// }

/* 
estructura del condicional if else if

if(condicion1){
  código a ejecutar cuando la condicion1 sea verdadera
}else if(condicion2){
  código a ejecutar cuando la condicion2 sea verdadera
}else{
  código a ejecutar cuando ninguna de las condiciones es verdadera
}
*/

//hacer un algoritmo que pida por propmt una edad
//si es menor a 14 no puede entrar a la fiesta
//si sestá entre 14 y 18 puede entrar con un adulto
//si es mayor o igual 18 puede entrar a la fiesta sin problemas

// let edad = Number(prompt("Ingrese la edad"));

// if (edad < 14) {
//   alert("No puedes entrar a la fiesta");
// } else if (edad < 18) {
//   alert("Puedes entrar con un adulto responsable");
// } else {
//   alert("Puede entrar a la fiesta");
// }

/* 
valor1 && valor2 es true cuando ambos valores son verdaderos, en caso contrario es false
valor1 || valor2 es true cuando al menos uno de los valores es verdadero, caso contrario es false
*/

// let nombre = prompt("Ingrese el nombre");
// let apellido = prompt("Ingrese el apellido");

// if (nombre != "" && apellido != "") {
//   alert(nombre + " " + apellido);
// } else {
//   alert("Los datos son requeridos");
// }

// let nombre = prompt("Ingrese el nombre");

// if (nombre === "ANA" || nombre === "ana") {
//   alert("El nombre ingresado es Ana");
// } else {
//   alert("El nombre ingresado no es Ana");
// }

let nombre = prompt("Ingrese el nombre");

if (nombre != "" && (nombre === "ema" || nombre === "EMA")) {
  alert("Hola Ema");
} else {
  alert("error");
}

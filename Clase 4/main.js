//FUNCIONES

/* 
estructura de una función

function nombreFuncion(){
  codigo a ejecutar por la función
}

nombreFuncion();
*/

// function saludar() {
//   let nombre = prompt("Ingrese su nombre");
//   alert(`El nombre ingresado es ${nombre}`);
// }

// function saludar() {
//   console.log("Hola");
// }

// saludar();

// saludar();

/* 
estructura de las funciones con parametros

function nombreFuncion(parm1, parm2, ..., parmn){
  codigo a ejecutar por la funcion
}

nombreFuncion(valor1, valor2, ..., valorn);
*/

// function saludar(saludo, nombre) {
//   console.log(`${saludo} ${nombre}`);
// }

// let nombre = prompt("Ingrese el nombre");
// saludar("Hola", nombre);
// saludar("Bienvenido", "pepito");

// function sumar(valorUno, valorDos) {
//   return valorUno + valorDos;
// }

// let resultado = sumar(4, 5);
// console.log("resultado", resultado);

//proceso de armado
// function armar(partes) {
//   return `muñeco armado con ${partes}`;
// }

// //proceso de pintado
// function pintar(munecoArmado) {
//   return `${munecoArmado} y pintado`;
// }

// //proceso de vestir y bodega
// function vestirBodega(munecoPintado) {
//   console.log(`${munecoPintado}, vestido y guardado en bodega`);
// }

// //inicio de proceso
// let munecoArmado = armar("madera");
// let munecoPintado = pintar(munecoArmado);
// vestirBodega(munecoPintado);

// function saludar() {
//   console.log("Hola");
//   return;
//   console.log("chao");
// }

// saludar();

// function calculadora(numUno, numDos, operacion) {
//   switch (operacion) {
//     case "+":
//       return numUno + numDos;
//       break;

//     case "-":
//       return numUno - numDos;
//       break;

//     case "*":
//       return numUno * numDos;
//       break;

//     case "/":
//       return numUno / numDos;
//       break;
//   }
// }

// let numeroUno = Number(prompt("Ingrese el numero uno"));
// let numeroDos = Number(prompt("Ingrese el numero dos"));
// let operacion = prompt("Ingrese la opeacion a realizar");
// let resultado = calculadora(numeroUno, numeroDos, operacion);

// alert(`${numeroUno} ${operacion} ${numeroDos} = ${resultado}`);

// let resultado = 0;

// function sumar(numeroUno, numeroDos) {
//   resultado = numeroUno + numeroDos;
// }

// sumar(5, 6);
// console.log(resultado);

// {
//   let edad = 89;
// }

// console.log(edad);

/* 
resumen: Cuando declaramos una variable dentro de cualquier tipo de bloque, está se convierte en una variable local.
         Cuando declaramos una variable fuera de cualquier de bloque, está se convierte en una variable global
*/

// function restar(numeroUno, numeroDos) {
//   let resultado = numeroUno - numeroDos;
//   return resultado;
// }

// function sumar(numeroUno, numeroDos) {
//   let resultado = numeroUno + numeroDos;
//   return resultado;
// }

// const suma = function (a, b) {
//   return a + b;
// };

// console.log(suma(4, 5));

//ARROW FUNCTION (funcion flecha)
// const suma = (a, b) => {
//   return a + b;
// };

// console.log(suma(6, 7));

//si no tenemos parametros, dejamos los parentesis vacios
//si solo tenemos un parametro, podemos quitar los aprentesis
//si quitamos las llaves y el return y además el codigo es de una linea, la arrow function hace un return implicito

// const saludar = () => {
//   return "Hola";
// };

// console.log(saludar());

// const saludar = nombre => {
//   return `Hola ${nombre}`;
// };

// console.log(saludar("andres"));

// const saludar = (nombre) => `Hola ${nombre}`;

// console.log(saludar("andres"));

const suma = (x, y) => x + y;
const resta = (x, y) => x - y;
const iva = (x) => x * 0.21;

let precioProducto = Number(prompt("Ingrese el precio del producto"));
let descuento = Number(prompt("Ingrese el descuento"));

//precio + iva - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
// = resta(suma(1000, iva(1000)), 100);
// = resta(suma(1000, 210), 100);
// = resta(1210, 100);
// = 1110
alert(nuevoPrecio);

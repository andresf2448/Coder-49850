//BUCLES O CICLOS

/* 
estructura del bucle for

for(desde; hasta; actualizacion){
  código a repetir por el bucle
}
*/

//i++         i = i + 1

// for (let i = 0; i < 100; i = i + 2) {
//   console.log(i);
// }

// let numero = Number(
//   prompt("Ingrese el número para ver su tabla de multiplicar")
// );

// for (let i = 1; i <= 10; i++) {
//   let resultado = numero * i;

//   alert(numero + " X " + i + " = " + resultado);
// }

// console.log(5 * 1);
// console.log(5 * 2);
// console.log(5 * 3);
// console.log(5 * 4);
// console.log(5 * 5);
// console.log(5 * 6);
// console.log(5 * 7);
// console.log(5 * 8);
// console.log(5 * 9);
// console.log(5 * 10);

// for (let turno = 1; turno <= 7; turno++) {
// let nombre = prompt("Ingrese su nombre");
// alert("Turno #" + turno + " Nombre: " + nombre);
// alert(`Turno #${turno} Nombre: ${nombre}`);
// }

// alert("Citas agotadas");

// let saludo = "Hola";
// let nombre = "Andrés";

// console.log(saludo + " " + nombre + " bienvenido");
// console.log(`${saludo} ${nombre} bienvenido`);

//break

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }

//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5 || i === 6) {
//     console.log(`numero quitado ${i}`);
//     continue;
//   }

//   console.log(i);
// }

// for (let i = 0; i < 10; i--) { CUIDADO BUCLE INFINITO
//   console.log(i);
// }

//WHILE
/*
estructura del while

while(condicion){
  código a ejeuctar siempre que la condición sea verdadera
}
*/

// let repetir = true;

// while(repetir){ //bucle inifinito
//   console.log("Hola");
// }

// let usuario = prompt("Ingrese el usuario");

// while (usuario != "pepito") {
//   alert("Usuario incorrecto");

//   usuario = prompt("Ingrese el usuario");
// }

// alert("Bienvenido");

/* 
estructura del bucle do while

do{
  código a repetir por primera vez y luego siempre que la condición sea verdadera
}while(condicion);
*/

// let repetir = false;

// while (repetir) { //primero piensa luego actua
//   console.log("Entramos");
// }

// do { //primero actua luego piensa
//   console.log("Entramos");
// } while (repetir);

/* 
estructura del switch

switch(valor){
  case valor1:
    código a ejecutar cuando el valor === valor1;
    break;

  case valor2:
    código a ejecutar cuando el valor === valor2;
    break;

  default:
    código a ejecutar cuando el valor no coincide con ninguno de los valores
    break;
}
*/

// let moneda = "usd";

// switch (moneda) {
//   case "ars":
//     console.log("moneda de Argentina");
//     break;

//   case "cop":
//     console.log("moneda de Colombia");
//     break;
//   case "clp":
//     console.log("moneda de Chile");
//     break;

//   default:
//     console.log("moneda no reconocida");
//     break;
// }

let entrada = prompt("Ingresar un nombre");

while (entrada != "ESC") {
  switch (entrada) {
    case "ANA":
      alert("HOLA ANA");
      break;
    case "JUAN":
      alert("HOLA JUAN");
      break;
    default:
      alert("¿QUIÉN SOS?");
      break;
  }
  entrada = prompt("Ingresar un nombre");
}

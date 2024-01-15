//FUNCIONES DE ALTO ORDEN

//1. RETORNA FUNCIONES

// function mayorQue(n) {
//   return (m) => m > n;
// }

// const mayorQue = (n) => {
//   return (m) => m > n;
// };

// let mayorQueCinco = mayorQue(5); //(m) => m > 5;
// console.log(mayorQueCinco(6));
// console.log(mayorQueCinco(3));

// let mayorQueDiez = mayorQue(10); //(m) => m > 10;
// console.log(mayorQueDiez(15));
// console.log(mayorQueDiez(3));

// const generarOperacion = (operacion) => {
//   if (operacion === "sumar") {
//     return (x, y) => x + y;
//   }

//   if (operacion === "multiplicar") {
//     return (x, y) => x * y;
//   }

//   if (operacion === "restar") {
//     return (x, y) => x - y;
//   }

//   if (operacion === "dividir") {
//     return (x, y) => x / y;
//   }
// };

// const suma = generarOperacion("sumar"); //(x, y) => x + y;
// console.log(suma(5, 6));

// const division = generarOperacion("dividir"); //(x, y) => x / y;
// console.log(division(20, 5));

//2. RECIBE FUNCIONES POR PARAMETRO
// const iterar = (arreglo, funcion) => {
//   for (const item of arreglo) {
//     funcion(item);
//   }
// };

// iterar([4, 5, 7, 9], console.log);

const mensaje = (valor) => {
  console.log(`Hola soy el valor ${valor}`);
};

const iterar = (arreglo, funcion) => {
  for (const item of arreglo) {
    funcion(item);
  }
};

iterar([4, 5, 7, 9], mensaje);

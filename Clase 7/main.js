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

// const mensaje = (valor) => {
//   console.log(`Hola soy el valor ${valor}`);
// };

// const iterar = (arreglo, funcion) => {
//   for (const item of arreglo) {
//     funcion(item);
//   }
// };

// iterar([4, 5, 7, 9], mensaje);

//METODOS DE BUSQUEDA Y TRANFORMACION PARA LOS ARREGLOS
// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 830 },
//   { id: 4, nombre: "media", precio: 175 },
// ];

//forEach recorre el arreglo es similar al forOf
// productos.forEach((item) => {
//   console.log(item);
//   console.log(item.nombre);
//   console.log(item.precio);
// });

//find busca o encuentra el primer elemento que cumpla la condicion
// let producto = productos.find(item => item.nombre === "asdfasdfasdf");
// console.log(producto);

// let nombre = prompt("Ingrese el nombre del producto");
// let productoEncontrado = productos.find((item) => item.nombre === nombre);

// if (productoEncontrado) {
//   alert(`
//     Id: ${productoEncontrado.id}
//     Nombre: ${productoEncontrado.nombre}
//     Precio: ${productoEncontrado.precio}
//   `);
// } else {
//   alert("Producto no disponible");
// }

//filter encontrar o filtrar todos los elementos que cumplan la condicion dada
// let productosFiltrados = productos.filter(item => item.precio > 500);
// console.log(productosFiltrados);

// let precio = Number(prompt("Ingrese el valor mínimo del producto"));
// let productosFiltrados = productos.filter((item) => item.precio > precio);

// productosFiltrados.forEach((item) => {
//   alert(`
//       Id: ${item.id}
//       Nombre: ${item.nombre}
//       Precio: ${item.precio}
//     `);
// });

//some verifica si existe al menos un elemento que cumpla la condicion dada
// console.log(productos.some((item) => item.nombre === "pantalon"));
// console.log(productos.some((item) => item.nombre === "pantalon grande"));

//map modifica o transforma los elementos del arreglo
// const nombres = productos.map((item) => item.nombre);
// console.log(nombres);

// const precios = productos.map((item) => item.precio);
// console.log(precios);

// const preciosNavidad = productos.map((item) => {
//   if (item.nombre === "camisa") {
//     return item;
//   } else {
//     return {
//       id: item.id,
//       nombre: item.nombre,
//       precio: item.precio - item.precio * 0.21,
//     };
//   }
// });

// console.log(preciosNavidad);

//reduce reduce a un solo valor el arreglo
// const numeros = [4, 5, 67, 8];
// const total = numeros.reduce((acum, item) => acum + item, 0);
// console.log(total);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 830 },
//   { id: 4, nombre: "media", precio: 175 },
// ];
// const total = productos.reduce((acum, item) => acum + item.precio, 0);
// console.log(total);

// const numeros = [1, 4, 3, 565, 7, 89];
// console.log(numeros.sort((a, b) => a - b));
// console.log(numeros.sort((a, b) => b - a));

const producto = [
  { nombre: "Pikachu", price: 21 },
  { nombre: "Charmander", price: 37 },
  { nombre: "Pidgey", price: 45 },
  { nombre: "Squirtle", price: 60 },
];

console.log(
  productos.sort((a, b) => {
    if (a.nombre > b.nombre) {
      return 1;
    }
    if (a.nombre < b.nombre) {
      return -1;
    }
    // a es igual a b
    return 0;
  })
);

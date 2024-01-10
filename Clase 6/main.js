//ARREGLOS

/* 
estructura de un arreglo

[elem1, elem2, ..., elem3];
*/

// const vacio = [];
// const numeros = [3, 4, 5, 7, 2];
// const nombres = ["camila", "andres", "carlitos"];
// const valores = [true, false, true, true];
// const varios = [1, true, "carlitos"];

// console.log(nombres[0]);
// console.log(nombres[2]);

// console.log(numeros[1] + numeros[3]);

// const productos = ["camisa", "pantalon", "media", "zapato"];

// for (let index = 0; index < productos.length; index++) {
//   console.log(productos[index]);
// }

//Métodos y propiedades de los arreglos
// const nombres = ["camila", "andres", "carlitos"];

//length da la longitud o cantidad de elementos del arreglo
// console.log(nombres.length);

//push agrega un elemento al final del arreglo
// nombres.push("juanita");
// console.log(nombres);

//unshift agrega un elemento al inicio del arreglo
// nombres.unshift("pepito");
// console.log(nombres);

//pop elimina el ultimo elemento del arreglo
// nombres.pop();
// console.log(nombres);

//shift elimina un elemento del inicio del arreglo
// nombres.shift();
// console.log(nombres);

//splice eliminar uno o varios elementos de un array
// const nombres = ["camila", "andres", "carlitos", "juanita"];
// nombres.splice(1, 2);
// console.log(nombres);
// nombres.splice(1, 0, "carmelita");
// console.log(nombres);

//join une todos los elementos del arreglo en un string separados por el parámetro
// console.log(nombres.join("===="));

//concat concatena dos arreglos en uno solo
// const mascotas = ["firu", "max"];

// const varios = nombres.concat(mascotas);
// console.log(varios);

//indexOf nos devuelve la posición donde se encuentra un elemento en caso de no encontrarlo devuelve -1
// console.log(nombres.indexOf("andres"));
// console.log(nombres.indexOf("andres felipe"));

//includes verifica si el arreglo contiene un elemento dado
// console.log(nombres.includes("andres"));
// console.log(nombres.includes("andres felipe"));

// const productos = ["camisa", "pantalon", "media", "zapato"];

// let nombre = prompt("Ingrese el producto a buscar");

// if (productos.includes(nombre)) {
//   alert("Producto disponible");
// } else {
//   alert("Producto no disponible");
// }

//reverse invierte el orden del arreglo
// productos.reverse();
// console.log(productos);

// const productos = ["camisa", "pantalon", "media", "zapato"];

// const eliminarNombre = (nombre) => {
//   let indice = productos.indexOf(nombre);

//   if (indice != -1) {
//     productos.splice(indice, 1);
//     console.log(productos);
//   }
// };

// eliminarNombre("media");

//ARREGLOS CON OBJETOS
// const objeto = { nombre: "camisa", precio: 1000 };
// const productos = [{ nombre: "media", precio: 400 }];

// productos.push(objeto);
// console.log(productos);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "media", precio: 750 },
//   { id: 3, nombre: "zapato", precio: 320 },
//   { id: 4, nombre: "gorra", precio: 142 },
// ];

// for (const producto of productos) {
//   console.log(producto.nombre);
//   console.log(producto.precio);
// }

// class Producto {
//   constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.vendido = false;
//   }

//   vender() {
//     this.vendido = true;
//   }
// }

// const productos = [];
// productos.push(new Producto("camisa", 1000));
// productos.push(new Producto("media", 700));
// productos.push(new Producto("zapato", 520));
// productos.push(new Producto("gorra", 120));

// console.log(productos);

const encontrar = (nombre) => {
  
};

let nombre = prompt("Ingrese el nombre para buscar el producto");
encontrar(nombre);

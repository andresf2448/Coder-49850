// const nombre = "andres";
// const edad = 54;
// const direccion = "AV";

// const nombre1 = "pepito";
// const edad1 = 44;
// const direccion1 = "AV";

/* 
estructura de un objeto

{clave1: valor1, clave2: valor2, ..., claven: valorn};
*/

// const persona1 = {
//   nombre: "andres",
//   edad: 54,
//   direccion: "AV",
// };

// const persona2 = {
//   nombre: "pepito",
//   edad: 44,
//   direccion: "AV",
// };

//acceder a las propiedades de un objeto
// console.log(persona1.nombre);
// console.log(persona1.edad);
// console.log(persona1.direccion);

// console.log(persona1["nombre"]);
// console.log(persona1["edad"]);
// console.log(persona1["direccion"]);

// let propiedad = prompt(
//   "Ingrese el nombre de la clave para buscar en el objeto"
// );

// alert(persona1.propiedad);
// alert(persona1[propiedad]);

// const persona1 = {
//   nombre: "andres",
//   edad: 54,
//   direccion: "AV",
// };

// persona1.nombre = "juan";
// persona1["edad"] = 89;
// console.log(persona1);

// persona1.cabello = "largo";
// persona1["madre"] = "robertica";

// console.log(persona1);

//funciones contructoras
// function Persona(nombrePersona, edadPersona, direccionPersona) {
//   this.nombre = nombrePersona;
//   this.edad = edadPersona;
//   this.direccion = direccionPersona;
// }

// const persona1 = new Persona("pepito", 45, "AV");
// const persona2 = new Persona("juan", 55, "AV1");
// console.log(persona1.nombre);
// console.log(persona2.nombre);

// {
//   nombre: "pepito",
//   edad: "45",
//   direccion: "AV"
// }

// function Persona(info) {
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
//   this.altura = info.altura;
//   this.peso = info.peso;
// }

// let persona1 = new Persona({
//   altura: 180,
//   direccion: "AV",
//   edad: 45,
//   peso: 45,
//   nombre: "pepito",
// });
// console.log(persona1);

// function Persona(nombrePersona, edadPersona, direccionPersona) {
//   this.nombre = nombrePersona;
//   this.edad = edadPersona;
//   this.direccion = direccionPersona;
//   this.hablar = function () {
//     console.log(`Hola soy ${this.nombre}`);
//   };
// }

// const persona1 = new Persona("pepito", 45, "AV");
// persona1.hablar();

// function Persona(nombrePersona, edadPersona, direccionPersona) {
//   this.nombre = nombrePersona;
//   this.edad = edadPersona;
//   this.direccion = direccionPersona;
// }

// const persona1 = new Persona("pepito", 45, "AV");

// console.log("nombre" in persona1);

// for(const clave in persona1){
//   console.log(clave);
//   console.log(persona1[clave]);
// }

// function Persona(nombrePersona, edadPersona, direccionPersona) {
//   this.nombre = nombrePersona;
//   this.edad = edadPersona;
//   this.direccion = direccionPersona;
//   this.hablar = function () {
//     console.log(`Hola soy ${this.nombre}`);
//   };
// }

// class Persona {
//   constructor(info) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//   }

//   hablar() {
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// let nombre = prompt("Ingrese su nombre");
// let edad = prompt("Ingrese su edad");
// let direccion = prompt("Ingrese su direccion");

// const persona1 = new Persona({nombre, edad, direccion});
// persona1.hablar();
// console.log(persona1.direccion);

// class Producto {
//   constructor(nombre, precio, imagen) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.imagen = imagen;
//   }
// }

// const producto1 = new Producto(
//   "RECOMENDADO Monitor Led De 24 Con Panel Ips Y Diseño Sin",
//   499900,
//   "http://asgf"
// )

// const producto2 = new Producto(
//   "MÁS VENDIDO Monitor Samsung Ls22a33anhlxzl 22 PuLG",
//   371900,
//   "http://aasdfsgfdg"
// )

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

// const producto1 = new Producto("monitor", 1000);
// console.log(producto1);
// producto1.vender();
// console.log(producto1);

class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  vender() {
    this.cantidad -= 1; //this.cantidad = this.cantidad - 1
  }

  agregar(cantidadIncremento){
    this.cantidad += cantidadIncremento; 
  }
}

const producto1 = new Producto("monitor", 1000, 5);
const producto2 = new Producto("camisa", 1000, 5);
console.log(producto1);
producto1.vender();
console.log(producto1);
producto1.vender();
console.log(producto1);

console.log("producto2", producto2);
producto2.vender();
console.log("producto2", producto2);

//OPERADOR ++

// let numero = 5;
// numero = numero + 1;
// numero += 1;
// numero++;

//OPERADOR TERNARIO

/* 
estructura del operador ternario

condicion ? codigo cuando condicion verdadera : codigo cuando la condicion es falsa;
*/

// let edad = 20;

// if (edad >= 18) {
//   console.log("Eres mayor de edad");
// } else {
//   console.log("Eres menor edad");
// }

// edad >= 18 ? console.log("Eres mayor de edad") : console.log("Eres menor edad");

// let temperatura = 18;

// if (temperatura > 30) {
//   console.log("Día caluroso");
// } else {
//   console.log("Día agradable");
// }

// temperatura > 30 ? console.log("Día caluroso") : console.log("Día agradable");

// let permiso;
// const usuario = {
//   nombre: "pepito",
//   edad: 10,
// };

// if (usuario.edad >= 18) {
//   permiso = true;
// } else {
//   permiso = false;
// }

// if(permiso){
//   console.log("Puedes entrar a la fiesta");
// }else{
//   console.log("No puedes entrar a la fiesta");
// }

// const usuario = {
//   nombre: "pepito",
//   edad: 10,
// };

// const permiso = usuario.edad >= 18 ? true : false;
// permiso ? console.log("Puedes entrar a la fiesta") : console.log("No puedes entrar a la fiesta");

/* 
valor1 && valor2 retorna valor2 si valor1 es verdadero, caso contrario retorna valor1
                 si valor1 entonces valor2

valor1 || valor2 retorna valor1 si este es verdadero, caso contrario retorna valor2
*/

// const carrito = [];

// if(carrito.length === 0){
//   console.log("El carrito está vacio");
// }

// carrito.length === 0 && console.log("El carrito está vacio");

// const usuario = {
//   nombre: "pedrito",
//   edad: 10,
// };

// const registro = usuario.edad >= 18 && new Date();
// console.log(registro);

// console.log(0 || "Falsy"); //falsy
// console.log(40 || "Falsy"); //40
// console.log(null || "Falsy"); //falsy
// console.log(undefined || "Falsy"); //falsy
// console.log("Hola Mundo" || "Falsy"); //Hola mundo
// console.log("" || "Falsy"); //falsy
// console.log(NaN || "Falsy"); //falsy
// console.log(true || "Falsy"); //true
// console.log(false || "Falsy"); // falsy

// const usuario = {
//   nombre: "pedrito",
//   edad: 10,
// };

// const usuario1 = null;

// console.log(usuario || "El usuario no existe");
// console.log(usuario1 || "El usuario no existe");

// let carrito;
// let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

// if (carritoStorage) {
//   carrito = carritoStorage;
// } else {
//   carrito = [];
// }

// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//ACCESO CONDICIONAL A UN OBJETO
// const usuario1 = null;
// console.log(usuario1?.nombre || "El usuario no existe");

// const usuario = {
//   nombre: "John Doe",
//   edad: 22,
//   cursos: {
//     javascript: "aprobado",
//   },
// };

// console.log(usuario?.cursos?.javascript || "La propiedad no existe");
// console.log(usuario?.trabajos?.coderhouse || "La propiedad no existe");

//DESESTRUCTURACION

// const usuario = {
//   nombre: "pedrito",
//   edad: 50,
//   direccion: "AV",
// };

// const nombre = usuario.nombre;
// const edad = usuario.edad;
// const direccion = usuario.direccion;

// const { nombre: nombrePersona, direccion, edad } = usuario;

// console.log(nombrePersona);
// console.log(direccion);

// const usuario = {
//   nombre: "pedrito",
//   edad: 50,
//   direccion: "AV",
//   telefonos: {
//     casa: 1234,
//     trabajo: {
//       numero1: 1234,
//       numero2: 3456,
//     },
//   },
// };

// const {
//   nombre: nombrePersona,
//   telefonos: {
//     trabajo: { numero1 },
//   },
// } = usuario;

// numero1
// usuario.telefonos.trabajo.numero

// const usuario1 = {
//   nombre: "andres",
//   edad: 45,
// };

// const usuario2 = {
//   nombre: "camila",
//   edad: 18,
// };

// const { nombre: nombre1 } = usuario1;
// const { nombre: nombre2 } = usuario2;

//DESESTRUCTURACION EN PARAMETROS
// const desestructurar = ({ nombre, edad }) => {
//   // const { nombre, edad } = objeto;
//   console.log(nombre, edad);
// };

// const usuario = {
//   nombre: "andres",
//   edad: 45,
// };

// desestructurar(usuario);

//DESESTRUCTURACION DE ARREGLOS
// const nombres = ["juan", "pedro", "carlitos"];
// const [a, , c] = nombres;

// console.log(a, c);

const usuario = {
  nombre: "pedrito",
  edad: 50,
  direccion: "AV",
  telefonos: {
    casa: {
      numero1: 12,
      numero2: 456,
    },
    trabajo: {
      numero1: 1234,
      numero2: 3456,
    },
  },
};

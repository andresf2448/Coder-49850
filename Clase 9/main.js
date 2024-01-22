// console.log(document.head);
// console.log(document.body);

//DOM
//NODO representación de una etiqueta html en javascript

//ACCESO AL DOM
//getElementById(id);
// let aplicacion = document.getElementById("aplicacion");
// console.log(aplicacion);
// console.log(aplicacion.innerHTML); //html interno
// console.log(aplicacion.innerText); //texto interno

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo);
// console.log(parrafo.innerHTML);
// console.log(parrafo.innerText);

//getElementsByClassName(clase);
// let perritos = document.getElementsByClassName("perritos");//HTMLCollection (parece un arreglo)
// console.log(perritos[0].innerHTML);
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);

// for (const perrito of perritos) {
//   console.log(perrito.innerHTML);
// }

//getElementsByTagName(nombreTag);
// let divs = document.getElementsByTagName("div"); //HTMLCollection
// console.log(divs);
// console.log(divs[0].innerHTML);
// console.log(divs[1].innerHTML);
// console.log(divs[2].innerHTML);

//MODIFICACIÓN DE NODOS
// let saludo = document.getElementById("saludo");
// saludo.innerHTML = "Hola coder";

// let saludo = document.getElementById("saludo");
// let seccion = prompt("Ingrese la sección que desea");

// if (seccion === "carrito") {
//   saludo.innerHTML = "<h1>Bienvenido al carrito</h1>";
//   saludo.className = "rojo";
// } else if (seccion === "favoritos") {
//   saludo.innerHTML = "<h1>Bienvenido a los favoritos</h1>";
//   saludo.className = "azul";
// } else {
//   saludo.innerHTML = "<h1>Bienvenido a nuestra super página</h1>";
//   saludo.className = "verde";
// }

//CREACIÓN DE ELEMENTOS
//1. creación del nodo
let div = document.createElement("div");

//2. asignación de contenido
div.innerHTML = "<h2>Hola coder</h2>";

//3. asignación de un padre
//1 forma en el body
// document.body.append(div);
//2 forma en un contenedor
// let contenedor = document.getElementById("contenedor");
// contenedor.append(div);

//ELIMINADO DE ELEMENTOS
// let contenedor = document.getElementById("contenedor");
// contenedor.remove();

// const nombres = ["juan", "Jonathan", "Luis", "andres", "pedrito", "carlitos", "juanito"];
// let contenedor = document.getElementById("contenedor");

// nombres.forEach((persona) => {
//   let li = document.createElement("li");
//   li.innerHTML = persona;
//   contenedor.append(li);
// });

let contenedor = document.getElementById("contenedor");
const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 750 },
  { id: 3, nombre: "media", precio: 377 },
  { id: 4, nombre: "gorra", precio: 482 },
];

productos.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2 class="rojo">Id: ${item.id}</h2>
    <p class="verde">Nombre: ${item.nombre}</p>
    <b class="azul">$${item.precio}</b>
  `;
  div.className = "estructura";
  contenedor.append(div);
});

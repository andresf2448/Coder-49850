//STORAGE
//localStorage guarda informaci
// console.log(localStorage);

//setItem(clave, valor); guarda información como clave valor en el storage siempre que la pagina se recargue, se cierre o apague/reinicie el computador

// localStorage.setItem("nombre", "andres");
// localStorage.setItem("numero", 5);
// localStorage.setItem("valor", true);

//getItem(clave); recupera un valor por su clave
// let nombre = localStorage.getItem("nombre");
// console.log(nombre);

// let numero = localStorage.getItem("numero");
// console.log(numero);

// let valor = localStorage.getItem("valor");
// console.log(valor);

// for (let i = 0; i < localStorage.length; i++) {
//   let clave = localStorage.key(i);
//   console.log(clave);
//   console.log(localStorage.getItem(clave));
// }

//removeItem(clave); elimina el par clave valor identificado por la clave
//clear(); elimina todo el storage
// localStorage.removeItem("nombre");
// localStorage.clear();

//sessionStorage guardar la información solo cuando se recarga la página

// sessionStorage.setItem("nombre", "andres");
// sessionStorage.setItem("numero", 5);
// sessionStorage.setItem("valor", true);

// let nombre = sessionStorage.getItem("nombre");
// console.log(nombre);

// let numero = sessionStorage.getItem("numero");
// console.log(numero);

// let valor = sessionStorage.getItem("valor");
// console.log(valor);

// for (let i = 0; i < sessionStorage.length; i++) {
//   let clave = sessionStorage.key(i);
//   console.log(clave);
//   console.log(sessionStorage.getItem(clave));
// }

//removeItem(clave); elimina el par clave valor identificado por la clave
//clear(); elimina todo el storage
// sessionStorage.removeItem("nombre");
// sessionStorage.clear();

/* 
la diferencia entre el sessionStorage y el localStorage es que el sessionStorage solo almacena la informacion cuando se recarga la página, por otro lado el localStorage guarda la información tanto cuando la página se recarga, se cierra o apaga/reinicia el computador
*/

// let objeto = { nombre: "juan" };
// let arreglo = [4, 5, 6, 7];

// localStorage.setItem("objeto", objeto);
// localStorage.setItem("arreglo", arreglo);

//JSON es un formato de texto plano similar a un objeto en javascript
//JSON.stringify(elemento); da formato json al elemento

// let objeto = { nombre: "juan" };
// console.log(JSON.stringify(objeto));
// localStorage.setItem("objeto", JSON.stringify(objeto));

// let arreglo = [4, 5, 6, 7];
// localStorage.setItem("arreglo", JSON.stringify(arreglo));

// let objeto = localStorage.getItem("objeto");
// console.log(objeto);

//JSON.parse(elemento); le da el formato original al elemento
// let objeto = JSON.parse(localStorage.getItem("objeto"));
// console.log(objeto);

// let arreglo = localStorage.getItem("arreglo");
// console.log(JSON.parse(arreglo));

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 700 },
//   { id: 3, nombre: "media", precio: 850 },
//   { id: 4, nombre: "zapato", precio: 370 },
// ];

// const guardarStorage = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// };

// productos.forEach(item => {
//   guardarStorage(item.id, JSON.stringify(item))
// });

// localStorage.setItem("carrito", JSON.stringify(productos));

//////////////////////////////////////////////////////////////////////////
// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario");

// if (usuarioStorage) {
//   usuario = usuarioStorage;
//   alert(`Bienvenid@ nuevamente ${usuario}`);
// } else {
//   usuario = prompt("Ingrese el usuario");
//   alert(`Bienvenid@ por primera vez ${usuario}`);
//   sessionStorage.setItem("usuario", usuario);
// }
/////////////////////////////////////////////////////////////////////////

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 700 },
//   { id: 3, nombre: "media", precio: 850 },
//   { id: 4, nombre: "zapato", precio: 370 },
// ];
// localStorage.setItem("carrito", JSON.stringify(productos));

let boton = document.getElementById("boton"); //boton para eliminar el carrito
let carrito = [];
let carritoStorage = localStorage.getItem("carrito");//traemos los productos del storage

if (carritoStorage) {
  //si hay productos en el storage le hacemos un parse y lo guardamos en carrito
  carrito = JSON.parse(carritoStorage);
}

//mostramos los productos del carrito en el dom
carrito.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `;

  document.body.append(div);
});

//agregamos el evento click al botoon para eliminar el carrito
boton.addEventListener("click", () => {
  localStorage.clear(); //eliminamos el storage
  alert("carrito eliminado");
  location.reload(); //recargamos la página
});

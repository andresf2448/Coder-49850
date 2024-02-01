//modificar el storage
/* 
1 traer la información del storage
2 acciones requeridas del proceso a ejecutar
3 subir el nuevo arreglo al storage 
*/

// const carrito = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 1000 },
// ];

// localStorage.setItem("carrito", JSON.stringify(carrito));

// const mofidicarPorNombre = (nombre, precio) => {
//   //traer la info del storage
//   let productosJson = localStorage.getItem("carrito");
//   let data = JSON.parse(productosJson);

//   //modificaciones necesarias
//   const producto = data.find((item) => item.nombre === nombre);
//   producto.precio = precio;

//   //guardamos el arreglo en el storage
//   localStorage.setItem("carrito", JSON.stringify(data));
// };

// let nombre = prompt("Ingrese el nombre del producto");
// let precio = Number(prompt("Ingrese el nuevo precio del producto"));

// mofidicarPorNombre(nombre, precio);

//crear una función que agregue un nuevo producto al storage
// const agregarProducto = (nombre, precio) => {
//   let productoStorage = localStorage.getItem("carrito");
//   let data = JSON.parse(productoStorage);

//   let producto = {
//     id: data.length + 1,
//     nombre,
//     precio,
//   };

//   data.push(producto);

//   localStorage.setItem("carrito");
// };

// let nombre = prompt("Ingrese el nombre del producto");
// let precio = prompt("Ingrese el precio del producto");

// agregarProducto(nombre, precio);

// crear una funcion que elimine un elemento del carrito (filter)
const eliminarProducto = (nombre) => {
  
}
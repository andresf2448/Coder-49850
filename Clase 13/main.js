//SPREAD OPERATOR ...

// const nombres = ["juan", "pedrito", "carlitos", "mariana"];

// console.log(nombres);
// console.log(...nombres);
// console.log(nombres.join(" "));

// const numeros = [3, 4, 56, 7, 5, 4];

// console.log(Math.max(...numeros));
// console.log(Math.min(...numeros));

//paso por valor
// let nombre = "andres";
// let nombre1 = nombre;

// nombre1 = "juan";
// console.log(nombre);

//paso por referencia
// const persona1 = { nombre: "andres", edad: 27 };
// const persona2 = {...persona1};

// persona2.nombre = "camila";
// console.log(persona1);
// console.log(persona2);

// const persona1 = { nombre: "andres", edad: 27 };

// const persona2 = {
//   ...persona1,
//   edad: 18,
//   direccion: "AV",
// };

// console.log(persona2);

//REST PARAMETERS
// const sumar = (...numeros) => {
//   console.log(numeros.reduce((acum, item) => acum + item, 0));
// };

// sumar(1, 2, 4);
// sumar(1, 2, 4, 235, 45, 7, 8, 3, 65);

//REPASO
/* 
if(condicion){
  codigo cuando la condicion es verdadera
}

if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}else{
  codigo a ejecutar cuando la condicion es falsa
}

if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 es verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones es verdadera
}
*/

/* 
for(desde; hasta; actualizacion){
  codigo a repetir
}

while(condicion){
  codigo a repetir siempre que la condicion sea verdadera
}
*/

/* 
function nombreFuncion(parm1, ..., paramn){
  codigo a ejecutar por la funcion
}

const nombreFuncion = (parm1, ..., paramn) => {
  codigo a ejecutar por la funcion
}

//si no tiene parametros se dejan los parentesisi vacios
//si tiene un parametro se pueden quitar los parentesis
//si quitamos las llaves y el return la arrow function retorna implicitamente

nombreFuncion(valor1, ..., valorn);
*/

/* 
class NombreClase{
  constructor(parm1, ..., parmn){
    this.clave1 = parm1;
    .
    .
    .
    this.claven = parmn;
  }

  metodo1(parm1, ..., parmm){
    codigo a realizar por el metodo1
  }
  .
  .
  .
  metodon(parm1, ..., parmm){
    codigo a realizar por el metodon
  }
}

const instancia = new NombreClase(valor1, ..., valor2);
*/

/* 
find, filter, forEach, map
*/

///////////////////////////////////////////////////////////////////////////////
const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "media", precio: 1000 },
  { id: 3, nombre: "zapato", precio: 1000 },
  { id: 4, nombre: "gorra", precio: 1000 },
];
///////////////////////////////////////////////////////////////////////////////
const carrito = [];

const agregar = (id) => {
  alert(`El producto seleccionado es el de id ${id}`)
}

productos.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
    <button id="boton${item.id}">Agregar</button>
  `;

  document.body.append(div);
  let boton = document.getElementById(`boton${item.id}`);
  boton.addEventListener("click", () => agregar(item.id))
});

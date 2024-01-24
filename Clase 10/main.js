//EVENTOS

// let boton = document.getElementById("boton");

// const respuesta = () => {
//   alert("Hola a todos");
// };

//1 forma
//OBSERVACION: debemos pasar la declaración de la función no su ejecución
// boton.addEventListener("click", respuesta);

//2 forma
//OBSERVACION: debemos pasar la declaración de la función no su ejecución
// boton.onclick = respuesta;

// let evento = prompt("Ingrese el evento requerido");

// boton.addEventListener(evento, respuesta);

// const respuesta = (nombre) => {
//   alert(`Hola ${nombre}`);
// };

// let nombre = prompt("Ingrese el nombre de la persona");

//para pasar parametros a la funcion podemos pasarlos como normalmente lo hacemos
//pero le agregamos () => la arrow function
// boton.addEventListener("click", () => respuesta(nombre));

//MOUSE
let boton = document.getElementById("boton");
// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("mouseover", () => console.log("mouseover"));
// boton.addEventListener("mouseout", () => console.log("mouseout"));
// boton.addEventListener("mousemove", () => console.log("mousemove"));
// boton.addEventListener("click", () => console.log("click"));
// boton.addEventListener("dblclick", () => console.log("dblclick"));

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("click", () => console.log("click"));

// let saludo = document.getElementById("saludo");

// boton.addEventListener("mousedown", () => {
//   saludo.className = "rojo";
// });

// boton.addEventListener("mouseup", () => {
//   saludo.className = "azul";
// });

// boton.addEventListener("mouseover", () => {
//   saludo.className = "amarillo";
// });

// boton.addEventListener("mouseout", () => {
//   saludo.className = "verde";
// });

// let saludo = document.getElementById("saludo");
// let nombre = document.getElementById("nombre");

// nombre.addEventListener("keydown", () => console.log("keydown"));
// nombre.addEventListener("keyup", () => console.log("keyup"));

// nombre.addEventListener("keyup", (e) => {
//   if (e.key === "a") {
//     saludo.className = "rojo";
//   } else if (e.key === "s") {
//     saludo.className = "azul";
//   } else if (e.key === "d") {
//     saludo.className = "amarillo";
//   } else {
//     saludo.className = "verde";
//   }
// });

// nombre.addEventListener("change", () => console.log("change"));

// let saludo = document.getElementById("saludo");
// let nombre = document.getElementById("nombre");

// nombre.addEventListener("input", () => {
//   if (!nombre.value.includes("@")) {
//     saludo.className = "rojo";
//   } else {
//     saludo.className = "blanco";
//   }
// });

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //para evitar que se recargue el formulario

  let inputs = e.target.children; //inputs del formulario

  if (!inputs[0].value.includes("@")) { //verifico que el input del nombre contenga @
    alert("debe incluir el @");
    inputs[0].value = "";
  }
});

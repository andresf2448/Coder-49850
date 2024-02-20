//FETCH
//fetch(url, config);

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data[0].title);
//     console.log(data[0].body);
//   });

// let listado = document.getElementById("listado");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((facundo) => facundo.json())
//   .then((data) => {
//     data.forEach((item) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h2>${item.title}</h2>
//         <p>${item.body}</p>
//       `;

//       listado.append(li);
//     });
//   });

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "Nuestra primera publicación",
//     body: "Nuestra primera publicación de Coder",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

let listado = document.getElementById("listado");

// fetch("./data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((item) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h2>Id: ${item.id}</h2>
//         <p>Nombre: ${item.nombre}</p>
//         <b>$${item.precio}</b>
//       `;

//       listado.append(li);
//     });
//   });

//ASYNC - AWAIT
const traerDatos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    data.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.body}</p>
          `;

      listado.append(li);
    });
  } catch (error) {
    console.log(error);
  }
};

traerDatos();

const usuario = null;
console.log(usuario?.nombre);
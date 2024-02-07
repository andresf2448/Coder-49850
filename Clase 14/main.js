//LIBRERIAS
let boton = document.getElementById("boton");

//SWEET ALERT
// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Good job!",
//     text: "You clicked the button!",
//     icon: "success",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Error!",
//     text: "Error inesperado",
//     icon: "question",
//     confirmButtonText: " =( ",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     position: "top-end",
//     icon: "success",
//     title: "Your work has been saved",
//     showConfirmButton: false,
//     timer: 3000,
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Sweet!",
//     text: "Modal with a custom image.",
//     imageUrl: "https://unsplash.it/400/200",
//     imageWidth: 400,
//     imageHeight: 200,
//     imageAlt: "Custom image",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Está seguro de eliminar el carrito?",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Sí, seguro",
//     cancelButtonText: "No, no quiero",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       //codigo a ejecutar en caso de querer eliminar
//       localStorage.clear();
//       Swal.fire({
//         title: "Borrado!",
//         icon: "success",
//         text: "El carrito ha sido borrado",
//       });
//     }
//   });
// });

boton.addEventListener("click", () => {
  Swal.fire({
    title: "Ingrese le nombre del producto a buscar",
    input: "text",
    showCancelButton: true,
    confirmButtonText: "Look up",
  }).then((result) => {
    // const producto = productos.find((item) => item.nombre === result.value);
    if (result.isConfirmed) {
      Swal.fire({
        title: result.value,
      });
    }
  });
});

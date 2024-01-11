class Libro {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.reservado = false;
  }

  reservar() {
    this.reservado = true;
  }

  hacerDisponible() {
    this.reservado = false;
  }
}

const productos = [];
productos.push(new Libro("libro1", 1000));
productos.push(new Libro("libro2", 400));
productos.push(new Libro("libro3", 500));
productos.push(new Libro("libro4", 750));

/* 
hacer un buscador de libros para que el usuario busque el libro
por nombre y muestre un alert con la descripcion del libro encontrado
en caso de no encontrar el libro mostrar una alerta descriptiva
*/

/* 
hacer un buscador de libros pero por precio mínimo. El usuario
ingresa el precio y el sistema muestra todos los libros
que tengan un precio mayor al ingresado (pueden ser mostrados en un solo alert o en varios)
*/

/* 
Mostrar un alert solo con los precios de los libros que se tienen
OJO! Solo precios
*/

/* 
Mostrar un alert solo con los nombres de los libros que se tienen
OJO! Solo nombres
*/

/* 
mostrar la suma del precio de todos los productos dispobles
*/

/* 
Opción para agregar un nuevo producto
*/

/* 
opcion para eliminar un producto
*/

/* 
este sistema debe funcionar siempre y cuando el usuario 
no coloque la palabra salir
*/

/* 
opcion para ver todos los productos
*/
//MATH propiedades
// console.log(Math.E); //constante de Euler
// console.log(Math.PI); //Número PI

// console.log(Math.max(55, 23, 56, 8, 0, 4, 2)); //máximo de los números pasados
// console.log(Math.min(55, 23, 56, 8, 0, 4, 2)); //mínimo de los números pasados

// console.log(Math.max(3, 56, Infinity, 7, 3, 21, 45));
// console.log(Math.min(3, 56, -Infinity, 7, 3, 21, 45));

//Redondeos
// console.log(Math.ceil(3.12)); //aproxima al entero más cercano hacia arriba
// console.log(Math.ceil(3.6)); //aproxima al entero más cercano hacia arriba
// console.log(Math.floor(3.34)); //aproxima al entero más cercano hacia abajo
// console.log(Math.floor(3.7));

// console.log(Math.round(3.7)); //aproxima al entero más cercano
// console.log(Math.round(3.3));
// console.log(Math.round(3.5));

//raiz cuadrada
// console.log(Math.sqrt(9));
// console.log(Math.sqrt(2));
// console.log(Math.sqrt(1));
// console.log(Math.sqrt(-1));

//Números aleatorios
// console.log(Math.random()); //número entre cero inclusivo y uno exclusivo
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

//0 - 10
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));

//Math.round(Math.random() * amplitud + desplazamiento);
//amplitud es la distancia del número de partida y el número de finalización
//punto de partida
//7 - 20
// console.log(Math.round(Math.random() * 13 + 7));
// console.log(Math.round(Math.random() * 13 + 7));
// console.log(Math.round(Math.random() * 13 + 7));
// console.log(Math.round(Math.random() * 13 + 7));
// console.log(Math.round(Math.random() * 13 + 7));

//2 - 8
// console.log(Math.round(Math.random() * 6 + 2));
// console.log(Math.round(Math.random() * 6 + 2));
// console.log(Math.round(Math.random() * 6 + 2));
// console.log(Math.round(Math.random() * 6 + 2));
// console.log(Math.round(Math.random() * 6 + 2));

//33 - 74
// console.log(Math.round(Math.random() * 41 + 33));
// console.log(Math.round(Math.random() * 41 + 33));
// console.log(Math.round(Math.random() * 41 + 33));
// console.log(Math.round(Math.random() * 41 + 33));
// console.log(Math.round(Math.random() * 41 + 33));

//101 + 187
// console.log(Math.round(Math.random() * 86 + 101));
// console.log(Math.round(Math.random() * 86 + 101));
// console.log(Math.round(Math.random() * 86 + 101));
// console.log(Math.round(Math.random() * 86 + 101));
// console.log(Math.round(Math.random() * 86 + 101));
// console.log(Math.round(Math.random() * 86 + 101));

const generarAleatorio = (amplitud, desplazamiento) => {
  return Math.round(Math.random() * amplitud + desplazamiento);
};

// 55 - 86
// console.log(generarAleatorio(31, 55));
// console.log(generarAleatorio(31, 55));
// console.log(generarAleatorio(31, 55));
// console.log(generarAleatorio(31, 55));
// console.log(generarAleatorio(31, 55));

//27-30
// console.log(generarAleatorio(3, 27));
// console.log(generarAleatorio(3, 27));
// console.log(generarAleatorio(3, 27));
// console.log(generarAleatorio(3, 27));
// console.log(generarAleatorio(3, 27));

//crear una algoritmo que diga de manear aleatoria que premio y persona gana el concurso
//arreglo personas
//arreglo de premios
// pepito -> computador
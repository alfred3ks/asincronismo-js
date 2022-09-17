/*

Callbacks:
Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

*/

// Veamos un primer ejemplo:
// Creamos la funcion: suma de valores
function sum(num1, num2) {
  return num1 + num2;
}

// Creamos la funcion que recibe la primera como callback:
function calc(num1, num2, callback) {
  return callback(num1, num2);
}

// La llamamos: OJO: Pasamos la funcion sin ejecutar
console.log(calc(3, 6, sum));

/*

OJO importante la funcion no tiene que llamarse callback en la funcion calc, se suele llamar asi por convenio.

*/

function calcTwo(num1, num2, sumNumber) {
  return sumNumber(num1, num2)
}

console.log(calcTwo(5, 6, sum));

/*

Veamos un segundo ejemplo: Vamos a usar una funcion llamada setTimeOut, la cual nos va a permitir ejecutar codigo en un tiempo determinado por mi. Esta funcion forma parte de la API de JS.

Esta funcion recibe como primer parametro una funcion y com segundo el tiempo de retardo en miliseg.

Una cosa que debemos saber que esta funcion ya es de por si un callback.

*/

// aqui vemos como funciona setTimeOut:
setTimeout(function () {
  console.log('Hola JavaScript...');
}, 2000)

// Creamos otra funcion:
function gretting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(gretting, 4000, 'Alfredo')

// Como vemos dentro del propio lenguaje ya hay funciones que usan callback, este es el caso.

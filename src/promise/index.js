/*
Estructura base de las promesas:

Una promesa tiene tres estados:
- Pendiente, cuando se esta ejecutando,
- Cumplido, cuando ya ha regresado la informacion deseada.
- Rechazada, cuando se rechaza la promesa.

Las promesas se contruyen con la palabra reservada Promise(). La cual nos regresa una funcion con dos funciones dentro que serian resolve y reject.

Lo vemos a continuacion:
*/

// Creamos nuestra promesa:
const promise = new Promise(
  function (resolve, reject) {
    resolve('Todo correcto!!!')
  }
);

/*
Aqui vemos otro ejemplo:
Vamos a ver si tenemos una cantidad de vacas, si se cumple se resolvera la promesa con resolve, sino se cumple se ejecutara el reject:
*/

const cows = 12;

const countCows = new Promise(function (resolver, reject) {

  if (cows > 10) {
    resolver(`We have ${cows} cows on the farm`)
  } else {
    reject('There is not cows on the farm')
  }
})

// Asi lo comprobamos:
countCows.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
}).finally(() => {
  console.log('finally');
})

/*
Esta es la base de como funciona una promesa. Con el .then() si se cumple se ejecuta este, con catch() para capturar el error al ser rechazada y con el finally para finalizar y cerrar todo.
*/
/*

Vamos a trabajar con al API de Platzi:
https://fakeapi.platzi.com/
https://fakeapi.platzi.com/doc/introduction

Usaremos el objeto XMLHTTPRequest para hacer peticiones a esta API.
XMLHttpRequest es un objeto nativo del navegador que permite hacer solicitudes HTTP desde JavaScript.

Para poder usar por este metodo y que se pueda ejecutar fuera del navegador, osea en el pc, osea nodejs, debemos instalar desde npm este objeto:

npm i xmlhttprequest

Una vez instalado ya podemos usarlo.
Esta forma de hacer peticiones es muy al inicio de JS

Usamos el recurso instalado:
const XMLHTTPRequest = require('xmlhttprequest');

Hacemos el llamado a la API: Ver documentacion Platzi:
const API = 'https://api.escuelajs.co/api/v1';

Construimos la funcion para hacer la llamada:
function fetchData(urlAPI, callback) {
Creamos una instancia del objeto XMLHTTPRequest:
let xhttp = new XMLHTTPRequest();

Usamos el metodo .open(), recibe 3 argumentos, el tipo de peticion, GET, la url, y true para habilitarlo

xhttp.open('GET', urlAPI, true);

Ahora usamos el metodo onreadystatechange

xhttp.onreadystatechange = function (event) {
    0 -> no inicializado
    1 -> loading,
    2 -> Ya se ejecuto el valor de send,
    3 -> esta descargando la solicitudes
    4 -> cuando se ha completado la llamada.

    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      }
    } else {
      const error = new Error('Error' + urlAPI);
      return callback(error, null);
    }
  }
  xhttp.send();
}

*/

const XMLHTTPRequest = require("xmlhttprequest").XMLHttpRequest;

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlAPI, callback) {
  let xhttp = new XMLHTTPRequest();

  xhttp.open('GET', urlAPI, true);

  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Error' + urlAPI);
        return callback(error, null);
      }
    }
  }
  xhttp.send();
}




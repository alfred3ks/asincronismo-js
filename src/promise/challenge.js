/*

Necesitamos instalar una dependencia para poder trabajar con promesas usando el fetch dentro de node.

npm i node-fetch

Para que funcione en nodeJS debemos en el package.json agregarle lo siguiente:

"type": "module",

Si no agregamos esto nos dara error.

La API que usaremos sera la de Platzi:

https://fakeapi.platzi.com/doc/products

Y como vemos para las peticiones:

[GET] https://api.escuelajs.co/api/v1/products


*/

import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

const fetchData = (urlAPI) => {
  return fetch(urlAPI);
}

fetchData(`${API}/products`)
  .then(response => response.json())
  .then(products => console.log(products))
  .catch(error => console.log(error))

// fetchData(`${API}/products`)
//   .then((response) => {
//     return response.json()
//   })
//   .then((products) => {
//     console.log(products)
//   })
//   .catch((error) => {
//     console.log(error)
//   })


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

Ahora aqui lo que haremos es hacer una peticion a un solo producto en vez de pedirlos todos.

*/

import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

const fetchData = (urlAPI) => {
  return fetch(urlAPI);
}

fetchData(`${API}/products`)
  .then((response) => {
    let resultado = response.json()
    return resultado;
  })
  .then((products) => {
    return fetchData(`${API}/products/${products[1].id}`)
  })
  .then((response) => {
    return response.json()
  })
  .then(product => {
    console.log('Product: ', product.title);
    return fetchData(`${API}/categories/${product.category.id}`)
  })
  .then(response => response.json())
  .then(category => {
    console.log('Category: ', category.id);
    console.log('Name:', category.name);
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    return console.log('finally')
  })


import fetch from "node-fetch";

// Vamos a guardar datos a la API:
// Tenemos la direccion de la API:
const API = 'https://api.escuelajs.co/api/v1';

/*

Funcion para hacer el post: Vemos el segundo argumento de la funcion, un objeto que lleva la configuracion necesaria para decirle el tipo de metodo que va a implementar, el modo que va a estar utilizando, las credenciales si es necesario (user, contraseña), o un tipo de autenticacion, los headers, como vamos  a enviar el tipo de informacion, etc .

Vemos la documentacion de MDN:
https://developer.mozilla.org/en-US/docs/Glossary/CORS

*/

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response;
}

/*

Vemos en la documentacion como es para hacer la peticion post:
[POST] https://api.escuelajs.co/api/v1/products/
{
  "title": "New Product",
  "price": 10,
  "description": "A description",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}

*/

const data = {
  "title": "Producto 212",
  "price": 212,
  "description": "A description",
  "categoryId": 1,
  "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data))

// Lo corremos y funciona!!!! vemos la salida por consola:
/*
{
  title: 'New Product Course',
  price: 999,
  description: 'A description',
  images: [ 'https://placeimg.com/640/480/any' ],
  category: {
    id: 1,
    name: 'Clothes',
    keyLoremSpace: 'fashion',
    image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=9052'
  },
  id: 233
}

Ahora vemos el id que nos regresa, vamos al navegador y vemos ese articulo que ya esta en la api:

https://api.escuelajs.co/api/v1/products/233
// 20220919020949
// https://api.escuelajs.co/api/v1/products/233

{
  "title": "New Product Course",
  "price": 999,
  "description": "A description",
  "images": [
    "https://placeimg.com/640/480/any"
  ],
  "category": {
    "id": 1,
    "name": "Clothes",
    "keyLoremSpace": "fashion",
    "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=9052"
  },
  "id": 233
}

Probamos con otro producto: 234
https://api.escuelajs.co/api/v1/products/233

// 20220919020848
// https://api.escuelajs.co/api/v1/products/234

{
  "title": "Producto 212",
  "price": 212,
  "description": "A description",
  "images": [
    "https://placeimg.com/640/480/any"
  ],
  "category": {
    "id": 1,
    "name": "Clothes",
    "keyLoremSpace": "fashion",
    "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=9052"
  },
  "id": 234
}

Ya hemos visto como mostrar los productos de esta API, en este apartado como subir productos a la API, queda de nuestra parte ver como hacer un delete y modificacion de productos.

*/
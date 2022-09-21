// Traemos el recurso instalado:
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// Aqui tenemos la direccions del API:
const API = 'https://api.escuelajs.co/api/v1';

// Funcion que ejecuta el llamado a la API:
function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();

  // Abrimos una coneccion a la API:
  xhttp.open('GET', urlApi, true);

  // Escuchamos los estado de la solicitud para saber cuando esta disponible la informacion:
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        // Aqui pasamos el callback:
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Error' + urlApi);
        return callback(error, null);
      }
    }
  }
  xhttp.send();
}

// Ahora vamos a hacer el llamado a la API: Encadenando calback hell
fetchData(`${API}/products`, function (error1, data1) {
  // si obtenemos un error paramos todo:
  if (error1) return console.error(error1);

  // Si todo bien volvemos hacer la peticion:
  fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {

    if (error2) return console.error(error2);

    fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {

      if (error3) return console.error(error3);

      // Si todo OK mostramos los objetos:
      console.log('data1:', data1[0]);
      console.log('data2:', data2.title);
      console.log('data3:', data3.name);
    })
  })
})

// Se encadenan los callback porque haremos 3 peticiones, como se ve como se va pasando callback tras callback.

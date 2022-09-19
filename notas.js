/*
Curso de asincronismo de JS de Platzi.

Asincronismo de JavaScript.

2- Que es el asincronismo:---

Los lenguajes de programacion por si mismo son sincronos, osea que se jecutan linea a linea una detras de otra.

En el transcurso de la evolucion de las tecnologias hemos implementados ya sean conceptos, librerias y recursos que le añaden a estos lenguajes de programacion el poder de trabajar con el asincronismo.

Para nuestro caso lo vemos en JS.

JavaScript se define como sincrono por defecto y tiene un solo subproceso.
Un solo hilo para trabajar.

JavaScript es sincrono y no bloqueante, con un bucle de eventos en el cual se maneja la (concurrencia), implementado con un unico hilo para sus interfaces d I/O, input y output.

JavaScript es single-threaded, aun con multiples procesadores, solo puede ejecutar tareas en un solo hilo, llamado el hilo principal.

Ahora veamos lo que significa bloqueante, es cuando una tarea no devuelve el control hasta que se ha completado.

En JS un ejemplo lo vemos cuando usamos el alert(), esta sentencia bloque la ejecucion del resto del codigo y hasta que no se ejecuta el boton de cerrar o ok no desbloquea el proceso.

Ahora vemos lo que significa no bloqueante, Una tarea devuelve inmediatamente el control con independencia del resultado. Si se completo, devuelve los datos, si no devuelve un error.

Ahora vemos el concepto de sincrono, las tareas se ejecutan de forma secuencial, se debe esperar a que se complete para continuar con la siguiente tarea.

Y el asicronismo, las tareas pueden ser realizadas mas tarde, lo que hace posible que una respuesta sea procesada en diferido.

Ahora vemos la concurrencia en JavaScript, este lenguaje utiliza un modelo de concurrencia basada en loop de eventos. OJO con esto.... Mejor Conocido como el EventLoop.

El EventLoop, el bucle de estos eventos, es un patron de diseño que espera y distribuye eventos o mensajes en un programa.

Formas en que JavaScript maneja la asincronia: Osea con esto el lenguaje maneja el asincronismo: tres conceptos mas trabajados en JS.

- Callbacks..., una funcion que se pasa como argumento de otra funcion y que sera invocada segun la necesidad.
- Promesas. (ES6)..., una evolucion del lenguaje para manejar el asincronismo, funcion no-bloquente y asincrona la cual puede retornar un valor ahora, el futuro o nunca.
- Async / Await... (ES2017), continua la evolucion del lenguaje, permite estructurar una funcion asincrona sin bloqueo de una manera similar a una funcion sincrona ordinaria.

Ahora con toda esta evolucion JavaScript acaba de converstirse en Multi-Threaded con la capacidad de realizar multiples tareas simultaneamente.
Existe un amigo que se encargara de hacer estas tareas asincronas mientras el lenguaje ejecuta sus tareas sincronas. Es amigo es el EventLoop.

  Con todo esto tenemos un concepto nuevo a dia de hoy de JavaScript, asincrono no bloquente, con un bucle de eventos para manejar la (concurrencia) implementado con un hilo pra sus interfaces de I/O.

3- El EventLoop:---

Ver gif event-loop.gif
Ver imagen asincronismo-js.png
https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

El bucle de eventos, es un patron de diseño que espera y distribuye eventos o mensajes en un programa.

- Dentro del lenguaje existe un concepto importante que debemos saber, vamos a  ver que es el Memory Heap, los objetos, variables, funciones, etc,  son asignados a un monticulo (espacio grande en memoria no organizado) es espera de ser utilizados.
Ver imagen 1-memory-heap.png

- Otro de los elementos que debemos conocer es el Call Stack (la pila), Esta apila de forma organizada las instrucciones de nuestro programa y con ello vamos a saber como vamos a distribuirlos.
Ver imagen 2-call-stack.png

- Otro concepto que debemos entender es el task queue, cola de tareas, se maneja la concurrencia, se agrega las tareas que ya listas para pasar al Stack (pila). El stack debe estar vacio, nunca lo debemos bloquear.
Ver imagen 3-stack-queue.png

Otro concepto el Micro Task Queue, las promesas tienen otra forma de jecutarse y una prioridad superior.

- Tambien es importante conocer las Web APIs, JavaScript del lado del cliente, setTimeOut. XMLHttRequest, File Reader, DOM. Recordemos que JS nacio dentro del navegador.

Luego con el nacimiento de NodeJS: fs, https, etc

Ahora podemos ver que el Event Loop es una tarea asiganada para mover del Task Queue al Stack, y solo si este Stack esta vacio. aqui en esta imgen vemos la representacion de todo lo nombrado anteriormente.
Ver imagen 4-event-loop.png

En el siguiente recurso podemos ver una representacion del evento loop:

http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

5- Configuracion del proyecto:---

- Editor de codigo VSCode.
- Referencia a la documentacion para JS: la MDN:
https://developer.mozilla.org/es/docs/Web/JavaScript
- Para la API usaremos una de platzi:
https://fakeapi.platzi.com/

- Crearemos un espacio de trabajo para montar los ejemplos. Crearemos una carpeta llamada asincronismo.

- Creamos nuestro package.json:
npm init -y

{
  "name": "asincronismo-js",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["JavaScript"],
  "author": "Alfredo Sánchez, @alfred3ks",
  "license": "MIT"
}

Crearemos la estructura de carpetas para organizar nuestro codigo.

src
.gitignore/node_modules

6- Callbacks, que son:---

Segun la documentacion de MDN explicacion que es un callback:
https://developer.mozilla.org/es/docs/Glossary/Callback_function

Función Callback
Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

Vamos a dentro de src crear una carpeta llamada callback
src/callback/index.js

8- XMLHTTPRequest:---

XMLHttpRequest es un objeto nativo del navegador que permite hacer solicitudes HTTP desde JavaScript.

Era el objeto que se usaba para hacer peticiones a APIs al principio en el lenguaje.

Para poderlo trabajar fuera del navegador debemos usar una dependencia que encontraremos en npm:

https://www.npmjs.com/package/xmlhttprequest
https://developer.mozilla.org/es/docs/Web/HTTP/Status

Ahora vamos a trabajar con este objeto para acceder a una API para traer sus valores.

Usaremos los callback para esto.
Vamos a usar la api:
https://fakeapi.platzi.com/

Vamos a ver un nuevo archivo dentro de src/callback/challenge1.js

9- Fetch data: ---

Ahora ya en el archivo anterior de challenge1.js hemos preparado nuestra funcion para hacer las peticiones pero aun no la hemos llamado, eso lo haremos en el archivo challenge2.js

Llego el momento de hacer fetch a la data.

Como vemos este es un tipico ejemplo donde encadenamos peticiones y se genera un calback hell, el infierno de los callback.

10- Callback hell: ---

El infierno de los callback.

Tenemos nuestro archivo:
challenge3.js

La aplicacion ya funciona bien, mi muestra por consola los valores.

Los callback hell es la anidacion de llamadas dentro de otras llamadas y eso puede ser algo confuso y generar errores.

Ahora los que haremos es un script para ejecutar el codigo desde la consola. Lo haremos en el package.json:

node challenge3.js

"scripts": {
    "callback": "node src/callback/challenge3.js"
  },

Lo ejecutamos:

npm run callback

Lo que vemos que para este caso no es necesario hacer las tres peticiones por la caracteristica de la API, pero se puede dar el caso que si sea necesario, en este caso con solo la primera peticion ya tendriamos la respuesta.


11- Las promesas:---

Nos podemos dirigir a la documentacion oficial.
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

El objeto Promise representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.

Una promesa, algo que va a pasar. Puede ser ahora, mas tarde o nunca.

Tenemos la carpeta src/promise/index.js donde veremos el codigo que vamos a implementar.

13- Fetch:---

Ahora que ya hemos visto como funciona una promesa, las palabras reservadas que podemos utilizar y cual es la logica que debemos de seguir llego el momento de llamar a una API externa y mostrar la informacion segun de lo que necesitemos.

Crearemos un nuevo archivo challenge.js dentro de la carpeta promise:

promise/challenge.js

En este archivo vemos como hacemos la peticion a la API y nos devuelve todos los productos. Un array [] con todos los productos.

Ahora lo que haremos es hacer una peticion de un solo producto como lo vimos cuando lo hicimos con el objeto XMLHTTPResponse.
Lo haremos en el archivo:

promise/challenge1.js

14- Fetch POST:---

Continuamos con el aprendizaje de las promesas llega la hora de hacer algo nuevo.

Guardaremos informacion en la API.

Dentro de nuestra API de consulta de Platzi si analizamos su documentacion vemos que a parte de obtener recursos de la API tambien podemos crearlos.

https://fakeapi.platzi.com/doc/products

Para esto tenemos que saber como funciona el metodo POST.

Vamos a ver como lo hacemos en nuestro carpeta de src/promise y creamos un nuevo archivo:

challenge-post.js

Bastante interesante...

15- Funciones asincronas:---

Vemos la documentacion oficial:
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function

Vamos a ver una nueva sintaxis para hacer peticiones a la API:

Hablamos de async y await.

Crearemos una nueva carpeta async y dentro nuestro archivo llamado index.js

src/async/index.js

La documentacion nos dice que la funcion asyn es una declaracion que define a una funcion asincrona la cual devuelve un objeto.

Usaremos las palabras reservadas async para la funcion y await dentro de la funcion la cual nos va a permitir trabajar un formato asincrono de la llamada a la API.

Vemos el codigo.

*/
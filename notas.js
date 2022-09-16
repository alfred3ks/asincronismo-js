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
  "name": "asincronismo",
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

*/
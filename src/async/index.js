// async y await:

// Creamos la promesa:
const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Async!!!'), 2000)
      : reject(new Error('Error'))
  })
}

// Creamos nuestra funcion asincrona:
const anotherFn = async () => {
  const something = await fnAsync()
  console.log(something);
  console.log('AQUI');
}

console.log('Before');
anotherFn()
console.log('After');
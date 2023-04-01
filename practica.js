// Crear una función que reciba como parámetro un número y retorne una promesa que resuelva si el número es par o impar
//el mio:
function esPar(numero) {
  return new Promise((resolve, reject) => {
    if (isNaN(numero)) {
      reject(`"${numero}" no es un número válido`);
    } else {
      if (numero % 2 === 0) {
        resolve("El número es par");
      } else {
        resolve("El número es impar");
      }
    }
  });
}
esPar(4)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.error(error);
  });

esPar(5)
  .then((resultado) => {
    console.log(resultado); 
  })
  .catch((error) => {
    console.error(error);
  });

  // Crear una función que reciba como parámetro un número y retorne una promesa que resuelva si el número es primo o no.
//el mio:
function esPrimo(num) {
  return new Promise((resolve, reject) => {
    if (num < 2) {
      reject(`${num} no es primo`);
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        reject(`${num} no es primo`);
      }
    }
    resolve(`${num} es primo`);
  });
}



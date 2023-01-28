// .1 Escriba una function que escriba un número a la inversa
function numeroInverso(num) {
    let numInv = '';
    while(num > 0) {
      numInv += num % 10;
      num = Math.floor(num / 10);
    }
    return numInv;
  }
  
  console.log(numeroInverso(12345)); 
  
//2.function convertirMayuscula(str) {
  var arrayDePalabras = str.split(" ");
  for (var i = 0; i < arrayDePalabras.length; i++) {
    arrayDePalabras[i] = arrayDePalabras[i].charAt(0).toUpperCase() + arrayDePalabras[i].slice(1);
  }
  return arrayDePalabras.join(" ");

console.log(convertirMayuscula("hola mundo"));
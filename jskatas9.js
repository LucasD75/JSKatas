// !Ejercicio 9

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos. Implementa la función denominada sumAll que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. Puedes usar este array para probar tu función:


const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(array) {

  let number = array[0]
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    number +=  element;

  }
  return number;
}
console.log(sumAll(numbers));

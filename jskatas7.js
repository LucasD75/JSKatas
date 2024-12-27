//! Ejercicio 7

//! Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne, numberTwo) {
  let respuesta
  if (numberOne > numberTwo) {
    respuesta = numberOne
  } else {
    respuesta = numberTwo
  }
  console.log(respuesta, `es el mayor de los dos números`)
}
sum(90323, 5434)
sum(23, 555555)

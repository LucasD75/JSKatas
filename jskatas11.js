// Ejercicio 11

// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']

function promedioStrings(param) {
  let suma = param[0]
  for (let i = 0; i < param.length; i++) {
    const result = param[i]
    if (typeof result === 'string') {
      suma += result.length
    } else {
      suma += result
    }
  }
  return suma
}
console.log(promedioStrings(mixedElements))

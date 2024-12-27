//*Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
//Puedes usar este array para probar tu función:*//
const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]

function findLongestWord(Array) {
  //DATOS es el array que me envian
  let avenger = Array[0] // Asigno la primera palabra del array como longitud mas larga
  for (let i = 1; i < Array.length; i++) {
    if (Array[i].length > avenger.length) {
      avenger = Array[i]
    }
  }
  return avenger
}
console.log(findLongestWord(avengers))

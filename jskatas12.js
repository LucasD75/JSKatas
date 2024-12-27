//Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

//pista (cuando eliminamos algo de un array, su longitud se verá afectada)

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

function removeDuplicates(duplicates) {
  console.log(duplicates)
  let pepe = []

  for (let i = 0; i < duplicates.length; i++) {
    const primerPuntero = duplicates[i]
    for (let j = i + 1; j < duplicates.length; j++) {
      const segundoPuntero = duplicates[j]
      if (primerPuntero === segundoPuntero) {
        pepe.push(duplicates.splice(j, 1)[0])
        j--
      }
    }
  }

  console.log(duplicates)
  console.log(pepe)
}

removeDuplicates(duplicates)

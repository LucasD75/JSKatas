// Ejercicio 17

// Probando For...in: Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}
// for (const property in alien) {
//   console.log(`${property}: ${alien[property]}`)
// }

const keys = Object.keys(alien)
for (let i = 0; i < keys.length; i++) {
  const property = keys[i]
  console.log(`${property}: ${alien[property]}`)
}

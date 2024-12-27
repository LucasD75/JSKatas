// let nums = [3, 4, 6, 8]
// for (let i = 0; i < nums.length; i++) {
//   const num = nums[i]
//   console.log(num * 2)
// }

// let frutas = ['pomelo', 'pera', 'manzana', 'naranja', 'mandarina']

// let frutasLength = []

// for (let i = 0; i < frutas.length; i++) {
//   let fruta = frutas[i]
//   for (let j = 0; j <= fruta.length; j++) {
//     frutasLength[i] = j
//   }
// }

// console.log(frutasLength) // [6, 4, 7, 7, 9]
// const numbers = ['palabra', 'color']
// longitudPalabra = []
// for (let i = 0; i < numbers.length; i++) {
//   let number = numbers[i]

//   for (let j = 0; j < number.length; j++) {
//     longitudPalabra[i] = j

//   }
//   console.log(number)

// }
// console.log(longitudPalabra)
const LETRAS = [
  'T',
  'R',
  'W',
  'A',
  'G',
  'M',
  'Y',
  'F',
  'P',
  'D',
  'X',
  'B',
  'N',
  'J',
  'Z',
  'S',
  'Q',
  'V',
  'H',
  'L',
  'C',
  'K',
  'E'
]
const DNI = 12131223
const RESTO = DNI % 23
console.log(RESTO)
console.log(DNI + (LETRAS[RESTO]))

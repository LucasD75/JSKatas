// Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.

const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]
function sumSellCount(products) {
  let total = 0
  for (let product of products) {
    total += product.sellCount
    // console.log(product.sellCount)
  }
  return total
  // console.log(total)
}
console.log(sumSellCount(products))

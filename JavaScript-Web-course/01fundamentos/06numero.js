const peso1 = 1.0
const peso2 = Number(2.0)
const numTest = 1.1

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(numTest))

const avaliacao1 = 9.871
const avaliacao2 = 6.871
const total = ((avaliacao1 * peso1 + avaliacao2 * peso2)/(peso1 + peso2))
//O toFixed é pra colocar a quantidade de casas decimais que eu quero depois do nº inteiro
console.log(total.toFixed(2))
//O toString(2) é para mostrar o nº é binario
console.log(total.toString(2))
console.log(typeof total)
console.log(typeof Number)
//formas de declarar variaveis: let, var e const. let é usada com mais frequencia
var a = 3
let b = 4
console.log(a,b)

let qualquer = 'legal'
console.log(qualquer)
console.log(typeof qualquer)

const peso1 = 1
const peso2 = 2

console.log(peso1,peso2)

const avaliacao1 = 9.871
const avaliacao2 = 6.871
const total = ((avaliacao1 * peso1 + avaliacao2 * peso2)/3)
//O toFixed é pra colocar a quantidade de casas decimais que eu quero depois do nº inteiro
console.log(total.toFixed(2))
//O toString(2) é para mostrar o nº é binario
console.log(total.toString(2))


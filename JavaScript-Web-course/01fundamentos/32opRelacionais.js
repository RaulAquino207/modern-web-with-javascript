console.log('01)', '1' == 1) //aqui ele faz apenas a comparação 
console.log('02)', '1' === 1)//aqui ele compara se os operandos são ESTRITAMENTE iguais
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)
//Date(0), é o mesmo que falar do primeiro dia do ano 
const d1 = new Date(0)
const d2 = new Date(0)

console.log('05)', d1 === d2)//comparando endereços de memoria
console.log('06)', d1.getTime() === d2.getTime())//aqui ele já compara os valores

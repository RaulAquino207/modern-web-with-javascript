
/*
STRING
cadeia de caracteres
*/
//pode ser delimitada por 3 simbolos. " ", ' ', ` `(crase)
const faculdade = 'ifce'
//.charAT mostra a letra que esta presente no INDEX, nesse caso o 3 da palavra (0)i (1)f (2)c (3)e
console.log(faculdade.charAt(3))
//.indexOf mostra o INDEX da letra solicitada, nesse caso o f da palavra (0)i (1)f (2)c (3)e
//console.log(faculdade.indexOf(F))

/*
O método substring () extrai os caracteres de uma string, entre dois índices 
especificados e retorna a nova string secundária.
*/
console.log(faculdade.substring(1))
console.log(faculdade.substring(0,3))

//concatenação

console.log('facul '.concat(faculdade).concat('!'))

console.log(faculdade.replace("e",'3'), 'faculdade'.replace("e", '3'))

console.log('Ana, Raul, Pedro, Muninha'.split(','))

//Templater Strings
const nome = 'Raul'
const concatenacao = 'Olá ' + nome + '!'
const template = `Olá ${nome}!`
console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei ...${up('cuidado')}!`)


const cuidado = 'cuidado'
console.log(cuidado.toUpperCase())
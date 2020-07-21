/*
Concat é um método super simples, a ideia é que consiga-se concatenar vários arrays em um único array
ou vários elementos que são passados como parâmetro para o método concat, ou até mesmo outros arrays
e todos esses elementos são concatenados em um novo array
*/

const filhas = ['Maria', 'Cibalena']
const filhos = ['Lucas', 'Caio']
const todos = filhas.concat(filhos, 'Raul')

console.log(todos,filhas,filhos)

console.log(['a', 'b'].concat([1,2], [3,4], 5, [[6,7]]))
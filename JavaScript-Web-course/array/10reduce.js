/*
Reduce é basicamente uma função que serve para transdormar um array em um único elemento, não obrigatóriamente
em um único elemento, mas pode transformar um array em um outro array, um array em um número, um array
em uma string e etc. Esse novo elemento que será definido dependendo do critério que foi definido.

O reduce conta com um acumulador e um valor
EX
[0] - acumulador,[1] - valor, faz algo com esses dois valores ...
[1] - acumulador já tendo sido feito algo[0][1],  [2] - valor, faz algo com esses dois valores ...
[2] - acumulador já tendo sido feito algo[1][2], [3] - valor ... E assim por diante

*/

const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

const resultado = alunos.map(e => e.nota).reduce(function(acumulador, valorAtual){
    console.log(acumulador, valorAtual)
    return acumulador + valorAtual
/*como parâmetro também é possível passar um valor inicial para ele já fazer a primeira 
operação não com o valor do indice [0], mas sim com o valor passado. Como no ex o valor 
10
*/
}, 10)

console.log(resultado)

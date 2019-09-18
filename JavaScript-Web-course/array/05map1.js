/*Associoado ao map existe dentro dele um laço que vai ser executado, e o map serve para fazer
uma transformação no array, então a ideia é mapear um array para um outro array do mesmo tamanho
só que com os dados transformados.
UM EXEMPLO BEM BÁSICA
temos o array [1,2,3], e queremos que todos esses elementos sejam multiplicados por 2
usando o map, podemos fazer isso de uma maneira bem fácil e teremos o resultado [2,4,6]
REGRA - O array inicial tem um tamanho X, após o map o meu novo array também terá um tamanho X
*/

const nums = [1,2,3,4,5]
//Map é um for com propósito
//retornando um vetor multiplicado por 2
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado, nums)
//Fazendo 3 funções para passar em 3 maps diferentes
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
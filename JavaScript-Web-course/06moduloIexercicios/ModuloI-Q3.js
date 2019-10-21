/*
Dado o array[5, 6, 10, 4, 3, 7, 1], mostre os valores que são maiores do que a 
media aritmética usando as funções reduce e filter.
RESPOSTA:
REDUCE
Reduce é basicamente uma função que serve para transdormar um array em um único elemento, 
não obrigatóriamente em um único elemento, mas pode transformar um array em um outro array, 
um array em um número, um array em uma string e etc. Esse novo elemento que será definido 
dependendo do critério que foi definido.
O reduce conta com um acumulador e um valor.

FILTER
Como o próprio nome já diz, o filter serve para filtrar o array, basicamente criar um SUBARRAY,
baseado em algum critério de filtro
*/

const array = [5, 6, 10, 4, 3, 7, 1]
media = array.reduce(function(acumulador, valorAtual){
    return acumulador + valorAtual
})/array.length
console.log(array.filter(function(nota){
    return nota > media
}))


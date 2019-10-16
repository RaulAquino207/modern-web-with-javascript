
console.log(typeof Object)
class Produto {}
console.log(typeof Produto)

function imprimirSoma(a , b){
    console.log(a + b)
}
//soma os valores normalmente
imprimirSoma(2, 3)
//soma o numero 2 com um valor undefined resultando em um NaN
imprimirSoma(2)
//soma apenas os 2 primeiros valores
imprimirSoma(2,3,4,5,6)


//função com retorno
function soma(a, b =1){
    return a + b
}
/*
desta forma o programa não imprimi nada pois a função "soma" tem retorno
soma(2,3)
logo para imprimir uma função com retorno usamos o console.log
*/
console.log(soma(2,3))
//caso o parametro não seja passado o valor de b será oq está definido na função, ou seja, o valor b = 1
console.log(soma(2))
//NaN
console.log(soma())
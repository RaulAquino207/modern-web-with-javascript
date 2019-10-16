//armazenando uma função em uma variavel
const imprimirSoma = function(a,b){
    console.log(a + b)
}

imprimirSoma(2, 3)
console.log(imprimirSoma(15,5))
//forma reduzida de fazer oq está em cima
//armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implicito, forma mais reduzida ainda
const subtracao = (a,b) => a - b
console.log(subtracao(2,3))

//exemplo
const imprimir2 = a => console.log(a)
imprimir2("Legal")
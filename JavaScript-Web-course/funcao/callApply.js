function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4560,
    desc: 0.15,
    //Esse getPreco serve para poder fazer a chama da função quando se passa o obj
    getPreco
}
global.preco = 20
global.desc = 0.15
console.log(getPreco())
console.log(produto.getPreco())

//Agora usando o callapply

const carro = {
    preco: 49990,
    desc: 0.20
}
//Dessa maneira não é preciso passar a função dentro do obj
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//A diferença entre o call e o apply é na passagem de parâmetros

console.log(getPreco.call(carro, 0.17, '$'))
//No apply é preciso passar os parâmetros dentro de um array
console.log(getPreco.apply(carro, [0.17, '$']))
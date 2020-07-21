/*
[ModuloI-Q11] - Dê dois exemplos de funções nativas que utilizam callback.
RESPOSTA:
Funções que nativas de array são funções que em sua essẽncia utilização o callback, irei trazer
a implemetação mínima de como funcionam 2 funções que utilização callback
*/

//Exemplo map
//Recriando o método MAP
Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}
//Vetor de JSON's
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}', 
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}', 
    '{"nome": "Caneta", "preco": 7.90}'
]
//Retornar um vetor com apenas o preços
const transformandoParaObj = json => JSON.parse(json)
const apanasPreco = produto => produto.preco
let resultado = carrinho.map2(transformandoParaObj).map2(apanasPreco)
console.log(resultado)

//Exemplo filter
//Recriando o método filter
Array.prototype.filter2 = function(callback){
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const produtos = [{
    nome: 'Notebook',
    preco: 2499,
    fragil: true
},{
    nome:'Ipad Pro',
    preco: 4199,
    fragil: true
},{
    nome: 'Copo de vidro',
    preco: 12.49,
    fragil: true
},{
    nome: 'Copo de plastico',
    preco: 1.99,
    fragil: false
},{
    nome: 'Porta alta',
    preco: 2000,
    fragil: false
}]

console.log(produtos.filter2(function(p){
    if(p.preco > 2000){
        return true
    }else{
        return false
    }
}))

//Criando 2 funções pra retornar apenas o produtos com  a tag frágil e com preço maior que 500 reais
const produtosFrageis = p => p.fragil == true
const produtosCaros = p => p.preco > 1000
console.log()
console.log(produtos.filter2(produtosFrageis).filter2(produtosCaros))
console.log()
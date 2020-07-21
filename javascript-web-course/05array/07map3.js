//PEGANDO O EXEMPLO PASSADO 
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

//Desafio retornar um vetor com apenas o preços
const transformandoParaObj = json => JSON.parse(json)
const apanasPreco = produto => produto.preco
// var json = '{"result":true, "count":42}';
// console.log(transformandoParaObj(json))
let resultado = carrinho.map2(transformandoParaObj).map2(apanasPreco)
console.log(resultado)

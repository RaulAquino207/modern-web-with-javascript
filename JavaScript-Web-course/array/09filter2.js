//Implementando o nosso filter
Array.prototype.filter2 = function(callback){
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            novoArray.push(this[i])
        }
    }
    return novoArray
}
/*Como o próprio nome já diz, o filter serve para filtrar o array, basicamente criar um SUBARRAY,
baseado em algum critério de filtro
Exemplos:
"Preciso de todos os alunos que tem nota maior do que 7",
"Preciso de todos os produtos que estão marcados como frágil",
"Clientes que estão em débido com a empresa"
*/

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
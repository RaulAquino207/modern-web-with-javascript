const produto = {}//objeto CHAVE VALOR
produto.nome = 'Celular Ultra Mega'
produto.valor = 4999.90
produto['Desconto Legal'] = 0.40 //evitar criar atributos com espaço

console.log(produto)

const produto2 = {
    nome: 'Camisa Polo',
    preco: 79.90
    
}
console.log(produto)
console.log(produto2)

//é possivel criar objeto dentro de um objeto
/*
const produto = {
    nome: 'Camisa Polo',
    preco: 79.90,
    objeto: {
        blabla: 1,
        objeto:{
            blabla: 2
        }
    }
}
*/
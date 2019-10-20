let valor //não inicializada
console.log(valor)//undefined
//imprimindo uma variavel que nem foi criada
//console.log(valor2)is a not defined
valor = null
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
delete produto.preco
console.log(produto)

produto.preco = null //sem preço
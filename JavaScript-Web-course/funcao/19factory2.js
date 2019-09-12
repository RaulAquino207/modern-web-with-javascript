function criarProduto(nome = 'undefined', preco = 0.0) {
    return {
        nome,
        preco
    }
}

console.log(criarProduto('blusa', 200))
console.log(criarProduto())


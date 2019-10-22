console.log(module.exports === this)
console.log(module.exports === exports)

//Recapitando sobre como exportar
this.a = 1
exports.b = 2 
module.exports.c = 3

//Mesmo tentando alterar o endereço de exports, ele continua referenciando o primeiro
exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
}

console.log(module.exports)
console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

//Recapitando sobre como exportar
this.a = 1
exports.b = 2 
module.exports.c = 3

//Mesmo tentando alterar o endereço de exports, ele continua referenciando o primeiro
//Tentando mudar aqui
exports = null
console.log(module.exports)
//Tentando mudar aqui
exports = {
    nome: 'Teste'
}

console.log(module.exports)

//Para que seja realmente mudado deverá ser feito dessa forma 
module.exports = {
    publico: true
}
module.exports.dia = 'Bom dia'
console.log(module.exports)
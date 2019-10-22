/*
Forma mais comumente utulizada, atribuindo o novo objeto para modulo.exports e assim está 
disponivel para fora do módulo

Quando eu uso module.exports, eu estou alterando o objeto padrão, como foi mostrado no móduloA
*/

module.exports = {
    bomDia: "Bom dia",
    boaNoite(){
        return "Boa noite"
    }
}
//Como a variavel abaixo não foi definida dentro do module.exports, ela só visivel dentro desse módulo
let a = 500
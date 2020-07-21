/*
[ModuloI-Q9] - Dado o objeto abaixo, que não poderá ser modificado, declare uma função 
saudacao Maria que utilizando o método saudacao do objeto joao imprima "Olá Maria".
*/

const joao = {
    nome: 'Joao',
    saudacao(){
        console.log(`Olá ${this.nome}`)
    }
}

function saudacaoMaria(obj){
    obj.nome = 'Maria'
    obj.saudacao()
}

saudacaoMaria(joao)
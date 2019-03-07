const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'Wellcome' //contexto léxico 2
    return saudacao
}

//Objeto são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 80,
    endereco: {
        rua: 'Rua Capitão Manoel Bandeira',
        bairro: 'Guabiraba',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
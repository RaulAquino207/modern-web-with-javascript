const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO
//isso está associado com o problema do THIS
//como resolver

const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()

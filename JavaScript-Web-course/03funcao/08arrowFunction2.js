function Pessoa(nome){
    console.log('entrou na função')
    this.nome = nome
    console.log(nome)
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
console.log('TESTE')
new Pessoa('Raul')
function Pessoa(){
    console.log('entrou na função')
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
console.log('TESTE')
new Pessoa
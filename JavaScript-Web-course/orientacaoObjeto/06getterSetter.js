const sequencia = {
    //convenção para informar que a variavel tem pretenção de ser acessada apenas internamente
    _valor: 1,
    get valor(){
        return this._valor++
    },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }


}

// console.log(sequencia._valor)

console.log(sequencia.valor,sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor,sequencia.valor)
//testando o IF
sequencia.valor = 900
console.log(sequencia.valor,sequencia.valor)
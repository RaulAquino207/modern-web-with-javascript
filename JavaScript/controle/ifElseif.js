function aprovacao(nota){
    if(nota >= 7){
        console.log('Aprovado com: ' + nota)
    }else if(nota < 7 && nota > 3){
        console.log('Está de AF com: ' + nota)
    }else{
        console.log('Reprovado com: ' + nota)
    }
}
aprovacao(6.3)
aprovacao(8.1)

function seForVerdade(valor){
    if(valor){
        console.log('Is true: ' + valor)
    }else{
        console.log('Is false: ' + valor)
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade('')
seForVerdade(' ')
seForVerdade(2)
seForVerdade(0)
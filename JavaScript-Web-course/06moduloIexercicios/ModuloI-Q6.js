/*
[ModuloI-Q6] - Utilizando o try/catch, faça com que o código a seguir não lance uma exceção. 
*/

// if (Math.random() > 0.5) throw new Error('Erro')
function imprimirMensagemDeErro(e){
    console.log('O número gerado foi maior que 0.5')
}
function gerarNumeroRandom(){
    try{
        num = Math.random().toFixed(1)
        console.log(num)
        if (num > 0.5){
            throw new Error('Erro')
        }
    }catch(e){
        imprimirMensagemDeErro(e)
    }
}

gerarNumeroRandom()
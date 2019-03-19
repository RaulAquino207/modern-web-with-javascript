function tratarErroELancar(erro){
    throw new Error('Eai meu queridão, infelizmente deu erro,porém já estamos tratando disso')
    // throw 10
    // throw true
    // throw 'mensagem'
   /*
    throw {
        nome : erro.nome,
        msg : erro.message,
        date: new Date
    }
    */
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.nome.toUpperCase() + '!!!')
    }catch (e){
        tratarErroELancar(e)
    }finally {
        console.log('cabo bb <3')
    }
}

const obj = {
    nome: 'Roberto'
}


imprimirNomeGritado(obj)

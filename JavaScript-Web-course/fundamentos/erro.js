function tratarErroELancar(erro){
    throw new Error('Eai meu queridão, infelizmente deu erro,porém já estamos tratando disso')
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
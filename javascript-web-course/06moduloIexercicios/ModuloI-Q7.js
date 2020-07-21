/*
ModuloI-Q7] - Dado a função abaixo, inclua um código que sempre exiba uma mensagem, 
com ou sem exceção, após a linha do return.
*/

function try_catch(){
    try{
        if(Math.random() > 0.3){
            throw new Error('Erro')
            return
        }
    }catch(e){
        console.log('Valor gerado maior que 0.3')
    }finally{
        console.log('Fim da operação')
    }
}

try_catch()
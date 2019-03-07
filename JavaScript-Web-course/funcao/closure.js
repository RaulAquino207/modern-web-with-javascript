/*
Closure é o escopo criado quando uma função é declarada,
esse escopo permite a função acessar e manipular variáveis externas à função
*/

//contexto léxico em ação

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
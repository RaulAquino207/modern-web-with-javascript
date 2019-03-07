let comparaComThis = function(params){
    console.log(this === params)
}

comparaComThis(global)
const obj = {}

comparaComThis = comparaComThis.bind(obj)
//Agora que eu setei o This para o OBJ ele retornará false quando comparado com o Global
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = params => console.log(this === params)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

//Agora fazedo um teste
comparaComThisArrow = comparaComThisArrow.bind(obj)
//Quem é mais forte o bind ou uma arrowfunction ?
comparaComThisArrow(obj)
//Resposta: A ArrowFuction se sobressai sobre o bind
comparaComThisArrow(module.exports)

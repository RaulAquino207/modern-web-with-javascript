//Estratégia 1 para gerar valores padrões
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
//funciona para essa estratégia
console.log(soma1() , soma1(3), soma1(1,2,3))
//não funciona para essa estratégia, ele irá retornar 3 ao invés de 0
console.log(soma1(0,0,0))

//Estratégia 2,3,4 para gerar valores padrões
function soma2(a,b,c){
    a = a !== undefined? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
//funciona para essas estratégias
console.log(soma2() , soma2(3), soma2(1,2,3))
//também funciona para essas estratégias
console.log(soma2(0,0,0))

// FORMA PADRÃO DO ES2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3() , soma3(3), soma3(1,2,3))
console.log(soma3(0,0,0))
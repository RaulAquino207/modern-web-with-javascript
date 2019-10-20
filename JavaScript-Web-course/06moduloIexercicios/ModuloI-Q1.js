/*
[ModuloI-Q1] - Quais os tipos de declaração de variável(var, let, const) sofrem do hoisting?
RESPOSTA:
Na tradução literal de hoisting, temos como elevação, içar, levantar etc.
E é exatamente isso que acontece quando se tem um efeito de hoisting.
*/
//O var é um dos tipos que sofre o hoisting, é como se ele fizesse o que está na linha comentada abaixo
//var a
console.log('x =', x)
var x = 5
console.log('x =', x)

//O let já não consegue ter o efeito de hoisting, logo irá gerar um erro
/*
console.log('y =', y)
let y = 5
console.log('y =', y)
*/

//E o mesmo se aplica para as constantes, logo o código abaixo também irá gerar um erro
/*
console.log('z =', z)
const z = 5
console.log('z =', z)
*/
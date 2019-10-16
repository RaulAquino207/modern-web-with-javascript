console.log('a = ', a)
var a = 2
console.log('a = ', a)

//como acontece
/*
var a
console.log('a = ', a)
a = 2
console.log('a = ', a)
*/
//ele faz um efeito de hoisting

//com let não ocorre o mesmo
console.log('b = ', b)
let b = 2
console.log('b = ', b)
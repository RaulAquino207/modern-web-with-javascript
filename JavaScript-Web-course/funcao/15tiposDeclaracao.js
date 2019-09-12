console.log(soma(3,4))
// Os 2 exemplos abaixo geram erros se estiverem antes do função expresssion
// console.log(sub(3,4))
// console.log(mult(3,4))


//Function declaration
function soma (x , y){
    return x + y
}

//Function expression
const sub = function(x, y){
    return x - y
}
console.log(sub(3,4))

//Named function expression
const mult = function mult (x, y){
    return x*y
}

console.log(mult(3,4))

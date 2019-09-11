/*
os parâmetros(obj) aqui estão definindo valores padrões para caso 
não fosse informado os valores de min e max
nesse caso min = 0 e max = 1000
*/
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    // console.log(valor)
    return Math.floor(valor)
}

const obj = {
    max: 50, 
    min:40}
console.log(rand(obj))
//aqui por ex eu apenas defini os valores de min para a função
console.log(rand({min:955}))
//aqui ele vai navegar entre os valores de 0 a 1000
console.log(rand({}))
/*
aqui ele vai gerar um erro pois os valores de min e max serão undefined
console.log(rand())
*/
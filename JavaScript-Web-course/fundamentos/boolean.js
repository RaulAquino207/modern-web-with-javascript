let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
//caso não se colocasse as exclamações ele iria imprimir 1
console.log(!!isAtivo)
console.log()
//true
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log()
//false
console.log(!!0)
console.log(!!null)
console.log(!!'')
console.log(!!NaN)

let nome = '' //vazio retorna false
console.log(nome || 'desconhecido')//o programa irá imprimir o 'desconhecido' por ele retornar true

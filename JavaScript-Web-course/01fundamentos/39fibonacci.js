function fibonacci(numero){
    let aux = 1
    let primeiroNumero = 0
    let fibo
    for (let index = 0; index < numero; index++) {
        fibo = primeiroNumero + aux
        primeiroNumero = aux
        aux = fibo

        
    }
    return fibo
}

const numeroFibonacci = 6

console.log(fibonacci(numeroFibonacci))


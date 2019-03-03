function getInteiroAleatorioEntre(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do{
    opcao = getInteiroAleatorioEntre(-1, 10)
    // sconsole.log(`Opcão escolhida foi ${opcao}.`)
    console.log('opção escolhida foi ' + opcao)
}while(opcao != -1)

console.log('Até a próxima!')
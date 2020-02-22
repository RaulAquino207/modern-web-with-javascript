/**
 * Um dos objetos disponibilizados para nós, é um objeto chamado PROCESS.
 * O PROCESS consegue ler dados do teclado e consegue também imprimir dados, tanto na entrada padrão
 * como na saída padrão.
 * Entrada padrão - teclado/Saída padrão - tela
 */

 /**
  * Dessa maneira eu consigo coletar dados pelo terminal usando a flag -a.
  * 
  * Entra na pasta onde se encontra esse arquivo e escreve no terminal 23entradaESaida.js -a
  * retornando assim o valor "true", caso eu tente 23entradaESaida.js -b ele irá retornar falso.
  */
 const anonimo = process.argv.indexOf('-a') !== -1 
//  console.log(anonimo)
if(anonimo){
    process.stdout.write('Fala anônimo!\n')
    process.exit()
}else{
    process.stdout.write('Informe o seu nome: \n')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n','')

        process.stdout.write(`Fala ${nome}!\n`)
        process.exit()
    })
}
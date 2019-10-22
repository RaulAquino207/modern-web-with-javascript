//Esse arquivo irá ser usado para acessarmos os módulos definidos anteriormente.
/*
Padrão adotado pelo curso, quando houver essa notação de "CLIENTE", significa que essa classe
irá utilizar outros módulos existentes
*/

//Para que seja importado algo, REQUIRE 
/*
./ significa o caminho que esta dentro do meu sistema, ou seja o seu caminho relativo, mas há
formas de referenciar arquivos terceiros
*/
/*
quando for feito const moduloA = require('./02moduloA'), tudo presente no arquivo '02moduloA' será
visível dentro desse arquivo, ou seja, ola,bemVindo e ateLogo
*/
const moduloA = require('./02moduloA.js')
/*
agora quando for feito o const moduloB = require('./03moduloB'), o que há presente nesse arquivo
será visível dentro desse arquivo, ou seja, bomDia e a função boaNoite()
*/
const moduloB = require('./03moduloB.js')

//Executando o testes
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
/*
Mesmo não sido criando um objeto em si no móduloA, quando fazemos console.log(moduloA), ele
retorna um objeto com tudo que foi definido no mesmo
*/
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)
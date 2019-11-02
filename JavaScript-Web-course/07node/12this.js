console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

/**
 * Obs em relação ao this, é quando se está acessando o this dentro de uma função que está dentro
 * de um módulo.
 */

 function logThis(){
     console.log('Dentro de uma função')
     console.log(this === exports)
     console.log(this === module.exports)
     //Quando o this é usado dentro da função ele aponta para o global
     console.log(this === global)
     this.perigo = 'PERIGO GLOBAL'
 }
//Dentro de uma função o this não aponta para exports, ao contrário de quando ele está fora
logThis()
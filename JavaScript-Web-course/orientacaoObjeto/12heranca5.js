//Todos os 3 são funções logo cada um deles tem um prototype
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
//Pelo fato de todos terem prototype podemos adicionar funções para cada um deles
//Vamos por ex adicionar uma função que inverte uma string
String.prototype.reverse = function(){
    //O reverse funciona para arrays, e dessa forma conseguimos fazer ele funcionar para Strings
    return this.split('').reverse().join('')
}

console.log('Raul Aquino'.reverse())
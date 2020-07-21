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

//Agora criando um método para o prototype de Array
Array.prototype.first = function(){
    return this[0]
}

const vetor = ['Raul', 'Mona', 'Nityananda', 'Rodrigo']
console.log(vetor.first())

//Cuidado ao mudar métodos já existentes
String.prototype.toString = function(){
    return 'Lascou tudo'
}
//Pelo fato de mudança no toString ele irá mudar a string definidas acima
console.log('Raul Aquino'.reverse())
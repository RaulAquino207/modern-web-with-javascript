//Função em JS é First-Class Object (Citizens)
//Higher-order function 

//Criar de uma forma literal

function fun1(){

}

//Armazenar uma função em uma variavel
const fun2 = function(){

}

//Armazenar uma funcao em um array 
const array = [function(a,b){ return a + b}, fun1, fun2]
//A forma de chamar uma função armazenada em um array
console.log(array[0](2,3))

//Armazenar uma função em um atributo de uma objeto
const obj = {

}
obj.falar = function(){return('Opa!')}
console.log(obj.falar())

//Passar uma função como parâmetro
function run(fun){
    fun()
}

run(function(){console.log('Executando...')})

//Uma função pode retornar/conter uma função
function soma (a , b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)
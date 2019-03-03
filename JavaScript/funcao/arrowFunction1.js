let dobro = function(a){
    return 2 * a
}
//A função arrow sempre é uma função anônima vc sempre terá que armazena-la em uma variavel

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return implicito

console.log(dobro(4))

let ola = function(){
    return 'olá'
}

ola = () => 'olá'

console.log(ola())
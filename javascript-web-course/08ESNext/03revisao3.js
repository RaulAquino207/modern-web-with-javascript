//ES8: Object.values/Object.entries
const obj = {a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na notação literal
const nome = "Raul"

const pessoa = {
    //Uma facilidade que antes não havia 
    //nome: "Raul",
    nome,
    //Outra melhoria foi a simplicidade de criar funções
    //Ola: function(){}
    ola(){
        return `Olá eu sou o ${nome}`
    }
    
}

console.log(pessoa.ola())

//Class

class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au'
    }
}

console.log(new Cachorro().falar())
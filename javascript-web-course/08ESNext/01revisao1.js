// let e const, adicionados no ES6
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)

//Template String
const produto = 'iPad'

console.log(`${produto} 
é 
caro
!`)

//Destructuring 
const [l,e, ...tras] = "Cod3r"

console.log(l,e, tras)

const teste = {
    nome: "Raul",
    idade: 19
}

const {nome: n, idade: i} = teste
console.log(n,i)

const teste2 = [1,2,3,4,5]
const [n1, ,n3] = teste2

console.log(n1,n3)





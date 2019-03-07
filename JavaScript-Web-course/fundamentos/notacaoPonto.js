console.log(Math.ceil(6.1)) //.ceil serve para fazer arredondamentos

const obj = {}
obj.nome = 'bola'
//obj['nome'] = 'esfera'

console.log(obj.nome)

function Obj(nome) {
    this.nome = nome //esse this. faz com que o parametro NOME seja visível fora do escopo do objeto
    this.exec = function(){ //pelo this. é possível criar até uma função
        console.log('EXEC ... ')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()


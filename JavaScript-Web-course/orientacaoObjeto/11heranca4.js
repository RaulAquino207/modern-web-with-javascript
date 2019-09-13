function MeuObjeto(){
}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)

console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Raul'
obj2.falar()

//Criando um obj e colocando sua referência ao protótipo do MeuObjeto
const obj3 = {
}
//E agora ele contém todos os atributos da meu protótipo pai
obj3.__proto__ = MeuObjeto.prototype

obj3.nome = 'Rafael'
obj3.falar()

//Resumindo a loucura
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
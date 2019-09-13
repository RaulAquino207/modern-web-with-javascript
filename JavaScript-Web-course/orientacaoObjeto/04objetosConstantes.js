/*
O fato de ser possivel alterar valores em um objeto declarado como const é porque 
o const só prende meu obj ao endereço de memória e não seus atributos
*/
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//Quando eu tento mudar o endereço de pessoa ele gera um ERRO
/*
pessoa = {nome: 'Ana'}
console.log(pessoa)
*/
//O .freeze faz que eu não tenha mais a liberdade de alterar meu obj
Object.freeze(pessoa)

pessoa.nome = 'Raul'
console.log(pessoa)


const pessoa = {
    nome: 'Rebeca',
    idade: 19,
    peso: 90
}
//Vai me informar todos os nomes dos meus atributos
console.log(Object.keys(pessoa))
//Vai me informar todos os valores de cada atributo
console.log(Object.values(pessoa))
//Me retorna um array com cada atributo(chave) e seu respectivo valor(valor)
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
});

Object.entries(pessoa).forEach(([chave,valor]) =>{
    console.log(`${chave}: ${valor}`)
})
/*
Para definir uma nova propriedade de um obj é bem simples, nem mesmo seria preciso usar essa função,
porém o uso dessa função defineProperty nos da a possibilidede de deixar não deixar o nosso atributo
ser acessado com facilidade fora do nosso obj
*/
Object.defineProperty(pessoa, 'dataNascimento', {
    //enumarable é para saber se ele vai poder ser listado como por ex usando a função keys
    enumerable: true,
    //writable é para saber se ela vai poder ser modificada
    writable: false,
    //value já é para atribuir um valor a esse meu atributo
    value: '01/01/1999'
})

console.log(pessoa)
//tentando alterar o valor da data de nascimento na qual eu proibi que o valor fosse alterado
pessoa.dataNascimento = '29/01/1999'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

/*
Object.assing (ECMAScript 2015)
Faz com que o primeiro obj a ser passado como parâmentro receba os valores dos outros obj
que forem passados
*/

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj  = Object.assign(dest,o1,o2)

console.log(dest)
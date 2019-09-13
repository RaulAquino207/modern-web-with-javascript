const pessoa = {
    nome: 'Rebeca',
    idade: 19,
    peso: 90
}
//Vai me informar todos os nomes dos meus atributos
console.log(Object.keys(pessoa))
//Vai me informar todos os valores de cada atributo
console.log(Object.values(pessoa))
//Me retorna um array com cada atributo e seu respectivo valor
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
});
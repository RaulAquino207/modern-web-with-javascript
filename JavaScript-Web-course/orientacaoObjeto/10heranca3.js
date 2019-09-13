const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}
//Ja cria o obj apontando para o obj pai
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.nome,filha1.corCabelo)
//além de conseguir fazer a referência, você também pode definir os atributos do novo obj
const filha2 = Object.create(pai, {
    nome: {value:'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
//o valor de nome não irá mudar por conta do writable
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem o cabelo da cor ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

//Mostrar todas as keys tanto do obj filho como do obj pai
for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key) :console.log(`Por herança ${key}`)
}
console.log(typeof Array, typeof new Array, typeof [])
//Uma forma de criar um array 
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
//Forma convencional de declaração
aprovados = ['Bia', 'Raul', 'Raimundo']
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Paulo'
aprovados.push('Rodolfo')
console.log(aprovados.length)
console.log(aprovados)

aprovados[9] = 'Pedro'
console.log(aprovados)
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
//Sort serve para organizar meu array
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
//Slice serve adicionar elementos em determinados index e também serve para remover elementos e remover e adicionar ao mesmo tempo

/*
primeiro parâmetro é o elemento e o segundo a quatidade de elementos que eu quero 
excluir a partir do index que eu defini. E para adicionar é a partir do 3 elemento em diante
*/
aprovados.splice(1,1, 'Elemento1', 'Elemento2')
console.log(aprovados)
//Caso queira somente adicionar basta passar 0 no segundo parâmetro


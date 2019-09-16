const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Removerá o ultimo elemento do array
console.log(pilotos)
pilotos.push('Verstappen')
console.log(pilotos)
pilotos.shift()//Removerá o primeiro elemento do array
console.log(pilotos)
pilotos.unshift('Hemilton')//Adicionará um valor a primeira posição do meu array
console.log(pilotos)

//splice pode adicionar,remover e adicionar e remover
/*
primeiro parâmetro index
segundo é caso vc queira excluir
terceiro ... params para adicionar valores
*/
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
//para remover somente um elemento
pilotos.splice(3,1)
console.log(pilotos)
//Com o splice é possivel criar um novo vetor com o elementos a partir de um determinado index
const algunsPilotos1 = pilotos.slice(2)//irá pegar todos os pilotos a partir do index 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)

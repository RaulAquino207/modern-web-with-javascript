const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores)

console.log(valores[0],valores[3])
console.log(valores[4])

valores[10] = 10
console.log(valores)
console.log(valores.length)

//adicionando valores novos ao vetor

valores.push({id:3}, false, null, 'teste')
console.log(valores)

//excluir o ultimo item de vetor
console.log(valores.pop())
console.log(valores)

//para excluir um elemento do vetor também é possível usar o delete
delete valores[0]
console.log(valores)

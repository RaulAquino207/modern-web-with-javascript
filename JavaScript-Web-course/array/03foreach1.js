const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
/*
A função callback do Foreach pode receber 1,2 ou 3 parâmetros sendo eles:
1 - O valor de cada posição
2 - O indice das posições
3 - O array completo
*/
aprovados.forEach(function(nome,indice, array){
    console.log(`${indice + 1}: ${nome}`)
    console.log(array)
    console.log()
})

aprovados.forEach(nome => console.log(nome))
console.log()
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)


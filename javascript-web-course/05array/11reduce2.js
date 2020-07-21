const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

//Desafio 1: Todos os alunos são bolsistas ?
const TodosBolsitas = alunos.map(a => a.bolsista).reduce(function(acumulador, valorAtual){
    return acumulador && valorAtual
})
console.log(TodosBolsitas)
if(TodosBolsitas == false){
    console.log('Nem todos os alunos são bolsistas')
}else{
    console.log('Todos os estudantes são bolsistas')
}

//Desafio 2: Algum aluno é bolsista ?
const AlgumBolsista = alunos.map(a => a.bolsista).reduce(function(acumulador, valorAtual){
    return acumulador || valorAtual
})
console.log(AlgumBolsista)
if(AlgumBolsista == true){
    console.log('Existe algum aluno que é bolsista')
}else{
    console.log('Não existe nenhum aluno que seja bolsista')
}
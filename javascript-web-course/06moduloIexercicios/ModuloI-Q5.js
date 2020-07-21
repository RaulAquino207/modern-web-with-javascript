/*
[ModuloI-Q5] - Retorne todas as notas do aluno do objeto abaixo utilizando a forma declarativa.
*/

const aluno = {
    nome: 'Iago',
    notas: [
        {
            nome: 'fisica', valor: 5
        },
        {
            nome: 'estatistica', valor: 4
        },
        {
            nome: 'probabilidade', valor: 1
        }
    ]
}

const notas = aluno.notas.map(e => e.valor)
console.log(notas)

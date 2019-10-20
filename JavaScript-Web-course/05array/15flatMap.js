/*
O flatMap consiste na utilização do método map juntamente com o concat
*/

const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustava',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
},{
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    },{
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDoTurma = turma => turma.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotasDoTurma)
console.log(notas1)

//Adicionando o método no prototype de Array
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDoTurma)
console.log(notas2)
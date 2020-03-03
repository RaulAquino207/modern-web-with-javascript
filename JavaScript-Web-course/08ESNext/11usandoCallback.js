/**
 * Este arquivo tem como objetivo mostrar qual a vantagem do uso do Promise em relação a utilização de callbacks em
 * alguns casos. 
 * 
 * Será usado uma listagem de 3 turmas encontradas nos links:
 * http://files.cod3r.com.br/curso-js/turmaA.json
 * http://files.cod3r.com.br/curso-js/turmaB.json
 * http://files.cod3r.com.br/curso-js/turmaC.json
 * 
 * O objetivo final é pegar o conteúdo desses 3 arquivos JSON para obter somente os nomes dos alunos
 */

//SEM PROMISE
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })

}
/**
 * Desta forma temos uma coisa chamada callback hell
 */
let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`))
    // console.log(nomes)
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`))
        // console.log(nomes)
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`))
            console.log(nomes)
        })
    })
})
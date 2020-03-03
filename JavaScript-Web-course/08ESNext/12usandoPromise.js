/**
 * Agora o mesmo exemplo do arquivo passado, porém agora fazendo a utilização de PROMISE.
 * 
 * CÓPIA DO ARQUIVO PASSADO:
 * 
 * Este arquivo tem como objetivo mostrar qual a vantagem do uso do Promise em relação a utilização de callbacks em
 * alguns casos. 
 * 
 * Será usado uma listagem de 3 turmas encontradas nos links:
 * http://files.cod3r.com.br/curso-js/turmaA.json
 * http://files.cod3r.com.br/curso-js/turmaB.json
 * http://files.cod3r.com.br/curso-js/turmaC.json
 * 
 * O objetivo final é pegar o conteúdo desses 3 arquivos JSON para obter somente os nomes dos alun
 */

//COM PROMISE
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res =>{
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
        })
    }) 

}
/**
 * Desta forma temos uma coisa chamada callback hell
 */
// let nomes = []
//Forma ainda menos inteligente
//Agora mudou que ao invés de passar ('A', callback), vamos passar somente a letra e fazer a utilização do .then()
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(aluno => `A: ${aluno.nome}`))
//     // console.log(nomes)
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(aluno => `B: ${aluno.nome}`))
//         // console.log(nomes)
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(aluno => `C: ${aluno.nome}`))
//             console.log(nomes)
//         })
//     })
// })

/**
 * Agora uma forma mais inteligente, com a utilização do Promise.all(), eu passo várias funções para ela e quando
 * todas as promises forem resolvidas (sucesso), então ele irá começar a chamar a cadeia dos métodos .then()
 */

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => {
        return [].concat(...turmas)
    })
    .then(alunos => {
        return alunos.map(aluno => aluno.nome)
    })
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e))


//Agora fazendo ele cair no REJECT
getTurma('D')
    .catch(e => console.log(e.message))
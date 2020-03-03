/**
 * Um recurso que surgiu no ES8, chamado de Async Await - Tem como finalidade transformar um código assíncrono em
 * algo que parece síncrono, ou seja, simplificar o uso de código assíncrono (USO DE PROMISES)
 */
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

let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    /**
     * Por mais que esteja sendo retornado um vetor, funções do tipo async retorna um objeto do tipo async function.
     * Então em cima desse desse objeto async function, é então chamanda a função .then()
     */
    return [].concat(turmaA,turmaB,turmaC)

}

obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))


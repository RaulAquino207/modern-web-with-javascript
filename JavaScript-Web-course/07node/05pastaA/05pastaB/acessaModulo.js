//Notação de ../ para sair da pasta e ir para uma mais externa
//Melhor forma
const moduloA = require('../../02moduloA.js')
console.log(moduloA.bemVindo)
/*
Outra alternativa é acessado o path do arquivo no qual eu quero exportar, clicando com o botão
direito em cima dele e clicando em "Copy relative path"

const moduloA = require('JavaScript-Web-course/07node/02moduloA.js')
*/

/*
Quando eu passo apenas por '', tenho acesso a tudo da minha pasta saudacaoEX, pelo fato
dela conter o index.js 
*/
const saudacao = require('saudacaoEX')
console.log(saudacao.ola)

//Também existe módulos que vem por padrão com o node, como por ex o http

// const http = require('http')
// // console.log(http)
// http.createServer((req,res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)

/*
Dentro da minhas pastaC há um arquivo index.js, logo eu não preciso referencia-lo por conta de
seu nome
*/
const c = require('./05pastaC')
console.log(c.ola2)
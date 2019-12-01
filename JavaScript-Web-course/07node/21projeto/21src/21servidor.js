const porta = 3003

const express = require('express')
const bancoDeDados = require('./22bancoDeDados')
const bodyParser = require('body-parser')

const app = express()

// app.get('/produtos', (req,res,next) => {
//     console.log('Middleware 1...')
//     next()
// })

/**
 * Outra forma de colocar um middleware é usando o use, porém qualquer irl irá cair no cadastro do 
 * produto como no exemplo citado abaixo, após o next()
 * 
 * app.user((req,res,next) => {
    console.log('Middleware 1...')
    next()
})
 */

// app.get('/produtos', (req,res,next) => {
//     res.send({nome:'Notebook', preco: 123.45}) //Converter para JSON
// })
app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req,res,next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req,res,next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos/', (req,res,next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

//Também é possivel alterar produtos usando o PUT
app.put('/produtos/:id', (req,res,next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req,res,next) => {
    const produto = bancoDeDados.deletarProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})
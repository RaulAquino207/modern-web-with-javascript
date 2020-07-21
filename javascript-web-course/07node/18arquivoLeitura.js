const fs = require('fs')
const caminho = __dirname + '/17arquivo.json'

//Lendo o arquivo de forma sincrona, evitar usar em arquivos pesados/IO
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Lendo o arquivo de forma ASSINCRONA
fs.readFile(caminho, 'utf-8' , (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//Executando de uma maneira mais fácil
const config = require('./17arquivo.json')
console.log(config.db)

//Usando agora o fs para leitura de pastar
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})
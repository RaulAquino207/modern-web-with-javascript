/**
 * No browser temos um objeto global que é o window, no NODE também temos um objeto global, que é
 * justamente o global
 */

//console.log(global) Mostra tudo o que tem no global PS: é muita coisa
/**
 * A partir daqui esse MinhaApp, será visivel em todos os arquivos criados
 */
global.MinhaApp = Object.freeze({
    saudacao(){
        return console.log('Estou em todos os lugares!')
    },
    nome: 'Sistema global'
})

/**
 * Como foi definido no arquivo passado algo a nivel de escopo global, logo é possivel ser acessado
 * através desse arquivo, como de muitos outros.
 */
require('./11global')

MinhaApp.saudacao()
/**
 * Caso não fosse usado o Object.freeze no arquivo passado, poderiamos alterar esse nome, e a 
 * nivel global isso não é bom!
 */
MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)
/*
[ModuloI-Q10] - Quais as vantagens da arrow function?

RESPOSTA:
A função arrow sempre é uma função anônima vc sempre terá que armazena-la em uma variavel.
As principais vantagens é o fato dela ser mais curta e ter um this associado a um contexto
na qual a função foi escrita.

#Caracteristicas 
*Lexical this
Ele captura o valor de this do contexto vinculado, ou seja do scopo em que ele se encontra

*Não é hoisted
O conceito de hoisted é poder usar a variável ou função antes de sua declaração

*Não pode ser usado como constructor
As arrow functions não podem ser usadas como construtores e caso você tente receberá um erro. 
O motivo é que, ela contem um this léxico, e não tem prototype, então não faria muito sentido.

*Sintax
Arrow function alem de ter uma declaração diferente, também podemos omitir os colchetes, 
quando omitido o colchetes não é necessário usar o return o retorno da função sera igual o 
retorno da expressão.
*/

//Exemplo 
function Pessoa(nome){
    console.log('entrou na função')
    this.nome = nome
    console.log(nome)
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
console.log('TESTE')
new Pessoa('Raul')
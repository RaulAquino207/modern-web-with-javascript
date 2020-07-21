/*
[ModuloI-Q8] - Indique uma vantagem ao utilizar o 
Immediately invoked function expression (IIFE). 

IIFE (Immediately Invoked Function Expression) é uma função em JavaScript que é executada 
assim que definida. É um Design Pattern também conhecido como Self-Executing Anonymous Function 
e contém duas partes principais. A primeira é a função anônima cujo escopo léxico é encapsulado 
entre parênteses. Isso previne o acesso externo às variáveis declaradas na IIFE, bem como evita 
que estas variáveis locais poluam o escopo global. A segunda parte corresponde à criação 
da expressão (), por meio da qual o interpretador JavaScript avaliará e executará a função.

RESPOSTA:
Uma das maiores vantagens de sua utilização é salvaguardar que variáveis caiam no escopo global, 
pois uma IIFE é uma função que se auto-executa, e gera um novo escopo dentro dela própria.
*/

//EXEMPLO

(function(mensagem){
    console.log(mensagem)
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})('Olá mundo!')
/*
console.log(mensagem)
caso eu tente executar a linha de código acima, irá gerar um erro
*/

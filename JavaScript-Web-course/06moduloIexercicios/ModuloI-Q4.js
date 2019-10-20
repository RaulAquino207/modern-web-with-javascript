/*
[ModuloI-Q4] - Usando destructuring, declare uma variável sala com o 
valor da sala do seguinte objeto.
*/

const fisica = {
    nome: 'Física',
    alunos: ['Iago', 'João'],
    localizacao : {
        bloco: 3,
        sala: 4
    }
}

const {localizacao:{sala}} = fisica
console.log(`A sala referente a aula de física é a ${sala}`)
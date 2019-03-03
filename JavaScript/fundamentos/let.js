/*
o let ele tem preferência para quem está dentro do escopo dele, caso ele não encotre o valor
dentro do escopo dele ele procura fora
*/
let numero = 1
{
    let numero= 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
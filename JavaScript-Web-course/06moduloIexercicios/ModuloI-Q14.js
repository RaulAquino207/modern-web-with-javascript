/*
[ModuloI-Q14] - Na seguinte constante, é possível manipular o atributo ‘nome‘? Por quê?
RESPOSTA:
Pelo fato do obj ter sido referenciado como const, isso significa que que a referencia dele não
poderá mudar, logo não seria possível atribuir um outro obj ao obj a
*/
const a = { nome: 'João' }
//linhas abaixo geram um erro
// const b = { nome: 'Marcos'}
// a = b

/*
Porém é possivel alterar os valores dos atributos do meu obj a, pelo de sua referência 
não ser alterada por conta desse evento
*/
a.nome = 'Raul'
console.log(a.nome)

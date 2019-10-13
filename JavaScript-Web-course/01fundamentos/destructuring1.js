// novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 30,
    // sobrenome: 'Julia',  
    endereco: {
        rua: 'Rua Capitão Manoel Bandeira',
        numero: 839,
        cep: '61940-170'
    }
}
const { nome, idade} = pessoa //tirando os atributos nome e idade do OBJETO pessoa
console.log(nome, idade)
//aqui simplesmente eu atribui as variaveis as 2 novas variaveis para vacilitar na hora de imprimir
const { nome: n, idade: i} = pessoa
console.log(n, i)
/*
aqui tentando acessar partes não existentes do meu meu OBJETO, mas para esses cassos é possivel
atribuir algo para eles
*/
const { sobrenome = 'Não Informado', bemHumorada = true} = pessoa
console.log(sobrenome , bemHumorada)

const { endereco:{ rua, numero, cep = 'Não informado'}} = pessoa

console.log(rua, numero, cep )

/*
nesse caso estamos tentando acessar conteúdos(aninhados) que não existem em nenhuma parte do meu OBJETO,
logo irá retornar um erro
*/
////
//const { conta:{ ag, num}} = pessoa
//console.log(ag, num)
////
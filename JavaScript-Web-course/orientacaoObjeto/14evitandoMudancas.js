/*
Pelo fato de JS ser fracamente tipado há uma flexibilidade muito grande na questão de remover ou
adicionar valores ao meu OBJ, então tendo em vista esse "problema" existem algumas funções que
deixam tudo isso mais difícil.
*/

//Object.preventExtensions - desse modo não se pode adicionar atributos ao meu obj, somente exclui-los
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible())
//Ou seja, meu produto não é extensível

//alterando um valor
produto.nome = 'Borracha'
//tentando adicionar um atributo
produto.descricao = 'Borracha branca'
//removendo um valor 
delete produto.tag
console.log(produto)

//Como podemos ver, alterar o valor e apagar são operações possíveis, por outro lado, não é possível adicionar novos elementos


//Object.seal - Não é possível adicionar nem apagar atributos do meu obj, porém ainda é possível alterar

const pessoa = Object.seal({
    nome: 'Raul',
    idade: 20,
    altura: 1.80
})
delete pessoa.altura
pessoa.estadoCivil = 'solteiro'
pessoa.idade = 21
//Não é possível fazer nenhuma das alterações acima
console.log('Selado:', Object.isSealed())
console.log(pessoa)

//Object.freeze - Não é possível adicionar, remover e alterar elementos
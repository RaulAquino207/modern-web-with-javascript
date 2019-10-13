/*
for (var i = 0; i < 10; i++){
    console.log(i)
}
//o valor i será o valor que fez ele sair de dentro do laço de repetição
console.log('i =',i)
*/

//problema histórico do JS
//array vazio
const funcs = []

for (var i = 0; i < 10; i++) {
    //usando o push para adicionar valores no vetor usando uma função anonima
    funcs.push(function(){
        console.log(i)
    })
    
}

//pelo fato de VAR não ter escopo de bloco logo ele irá imprimir 10 para qualquer chamada que vc fizer
funcs[2]()
funcs[8]()


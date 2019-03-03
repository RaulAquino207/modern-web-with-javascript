/*
for (let i = 0; i < 10; i++){
    console.log(i)
}
//agora usar o let ele não irá imprimir o valor de i por conta o let tem escopo de bloco
console.log('i =',i)
*/
const funcs = []
//mudando para let realmente funciona
for (let i = 0; i < 10; i++) {
    //usando o push para adicionar valores no vetor usando uma função anonima
    funcs.push(function(){
        console.log(i)
    })
    
}

//agora usando let realmente irá funcionar diferente do exemplo usando o VAR
funcs[2]()
funcs[8]()
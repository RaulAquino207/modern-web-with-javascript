//Em JS é possivel não passar nenhum argumento para uma função, porém com o 
//ARGUMENTS(que é um array interno de uma função)
//podemos  passar argumentos para uma função que não recebe parametros e manipulados através do mesmo

//dessa forma consigos não estipular a quantidade de elementos e fazer msm assim a operação
function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(2,3))
console.log(soma(2,3,5,6,7,3,2, "TESTE"))

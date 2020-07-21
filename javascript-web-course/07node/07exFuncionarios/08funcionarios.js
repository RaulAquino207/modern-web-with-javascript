const url = 'https://files.cod3r.com.br/curso-js/funcionarios.json'
/**
 * Axios = Client http, ele faz requisições para obter informações de algo que está remoto
 */
const chinesa = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    if(func.salario < funcAtual.salario){
        return func
    }else{
        return funcAtual
    }
}

 const axios = require('axios')
axios.get(url).then(response =>{
    const funcionarios = response.data
    console.log(funcionarios)
    //Desafio: Pegar a mulher Chinesa que contém o menor salário
    //Mulher chinesa com menor salário
    const func = funcionario.filter(chinesa).filter(mulheres).reduce(menorSalario)
    console.log(func)

})







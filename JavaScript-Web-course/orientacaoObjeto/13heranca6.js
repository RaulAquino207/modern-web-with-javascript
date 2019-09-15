//Função construtora
function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 001)
const aula2 = new Aula('Até breve', 500)

console.log(aula1,aula2)


//função que simula o oporador new
function novo(f, ...params){
    const obj = {}
        obj.__proto__ = f.prototype
        f.apply(obj,params)
        return obj
    
}

const aula3 = novo(Aula, 'Bem vindo', 001)
const aula4 = novo(Aula, 'Até breve', 500)
console.log(aula3,aula4)

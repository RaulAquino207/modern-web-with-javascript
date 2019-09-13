//Usando a notação literal
const obj1 = {

}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
//Outra forma de criar um obj
const obj2 = new Object
console.log(obj2)

//Outro forma é criando uma função construtura 
function Produto(nome, preco, desconto){
    //this faz com que o atributo nome seja visível fora do escopo da função
    this.nome = nome
    //logo meus atributos preco e desconto são privados
    
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }

    this.getPrecoProduto = () => {
        let msg = 'O preço do produto ' + nome + ' é '
        return msg + preco
    }
    

} 

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 3000, 0.10)

//Como o nome do meu obj produto foi tornado público eu posso altera-lo sem nenhum problema
console.log(p1.nome, p2.nome)

p1.nome = 'Caneta vermelha'
p2.nome = 'Notebook ACER'
console.log(p1.nome, p2.nome)

console.log(p1.getPrecoProduto(), p2.getPrecoProduto())
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Outra forma de criar um obj é a partir de uma função FACTORY

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Raulzinho', 7980, 4)
const f2 = criarFuncionario('Nityananda',9800,2)

console.log(f1.getSalario(), f2.getSalario())

//Outra forma é a partir do Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Outra forma é usando JSON.parse(transforma um JSON em um obj)
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
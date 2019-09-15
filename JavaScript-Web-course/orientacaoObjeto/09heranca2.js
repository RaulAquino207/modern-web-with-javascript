Object.prototype.attr0 = 'Object' //Não faça isso em casa!

const avo = {attr1: 'Avo'}
//para fazer a referencia de pai para o avo é necessário usar o __proto__: nome da classe mais acima
const pai = {__proto__: avo, attr2: 'Pai', attr3:'PAIFILHO'}
const filho = {__proto__: pai, attr3: 'Filho'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual+= delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}KM/h de ${this.velMax}KM/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shodowing/sobreamento, vai sobrescrever o velMax de carro
}

const volvo = {
    // __proto__:carro,
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
    
}

//Outra forma de fazer o prototype sem usar o __proto__ no meu objeto

Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())


ferrari.acelerarMais(300)
console.log(ferrari.status())

volvo.acelerarMais(200)
console.log(volvo.status())

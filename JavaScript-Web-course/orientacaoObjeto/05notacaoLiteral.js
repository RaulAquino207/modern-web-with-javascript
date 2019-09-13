const a = 1
const b = 2
const c = 3
//antigamente
const obj1 = {a:a,b:b,c:c}
//atualmente
const obj2 = {a,b,c}

console.log(obj1, obj2)

const nomeAtr = 'nota'
const valorAtr = 7.8

const obj3 = {}
obj3[nomeAtr] = valorAtr

console.log(obj3)

const obj4 = {
    [nomeAtr]: valorAtr
}

console.log(obj4)

const obj5 = {
    //forma antiga de definir uma função dentro de um obj
    funcao1: function(){
        //...
    },
    //nova forma
    funcao2(){
        //...
    }
}

console.log(obj5)
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

//for in
//usando o let para que não seja possivel acessar o valor de i fora do escopo
for(let i in notas){
    console.log(i,notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

//for in para um OBJ

for(let i in pessoa){
    console.log(`${i} = ${pessoa[i]}`)
}

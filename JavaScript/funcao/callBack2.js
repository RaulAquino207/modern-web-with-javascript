const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem o callBack
const notasBaixas1 = []
for (i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}


console.log(notasBaixas1)

//Com o callBack

const notasBaixas2 = notas.filter((nota) => nota < 7)
console.log(notasBaixas2)


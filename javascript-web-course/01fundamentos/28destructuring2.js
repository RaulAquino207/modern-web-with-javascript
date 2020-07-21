const [a] = [10]
console.log(a)
const [n1, ,n3, ,n5,n6 = 0] = [10, 7, 9, 8]
console.log(n1,n3,n5,n6)
const b = [10, 3, 5, 7, 12, 17]
const [m1 ,m2] = b
console.log(m1,m2)
const [ ,[ ,nota]] = [[ ,8, 8],[9, 6, 8]]
console.log(nota)
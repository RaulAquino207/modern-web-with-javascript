/*
JSON - JS object notation
FARMATO TEXTUAL que é diferente da notação literal de objeto
*/

//Primeiro vamos criar um obj e transforma-lo para JSON (processo mais fácil direto)
//JSON não contem um dos elementos do obj que é a FUNÇÃO
//JSON é um formato de dados
//Um dos mais usandos para interoperabilidade entre sistemas

const obj = {
    a:1,
    b:2,
    c:3,
    soma(){
        return a + b + c
    }
}

//Transformando para JSON
console.log(JSON.stringify(obj))
//A função é excluída 

//Agora transformar um JSON é um OBJ
// console.log(JSON.parse("{a: 1, b: 2, c: 3}")) ISSO AQUI DA ERRO
// console.log(JSON.parse("{ 'a': 1, 'b':2, 'c': 3}")) TAMBÉM DA ERRO
//A forma correta é delimitar meus atributos com aspas DUPLAS
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1, "b": "String", "c": true, "d": {}, "e": []}'))
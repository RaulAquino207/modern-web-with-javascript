/**
 * Operador .... REST(juntar) / SPREAD(espalhar)
 * 
 * Usar rest como parâmetro de uma função
 * 
 * Usar spread como objeto
 */

 const functionario = {nome: "Maria", salario: 12345.99}
 //Quando eu faço ...funcionario, eu estou pegando todos os atributos de funcionário e colocando dentro de clone
 const clone = {ativo: true, ...functionario}

 console.log(clone)

 //Usando spread em contexto de arrays
 const grupoA = ['Raul', 'Mona', 'Nity']
 const grupoFinal = ['Mario', ...grupoA, 'Pedro']
 console.log(grupoFinal)
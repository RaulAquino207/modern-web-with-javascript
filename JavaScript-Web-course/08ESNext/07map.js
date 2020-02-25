/**
 * Nós já temos dentro do JS uma estrutura dinâmica chave/valor que é exatamente o objeto, porém foi
 * adicionado uma nova estrutura que é o MAP, no caso do objeto a chave é apenas um literal, um valor
 * como um string por exemplo, agora no MAP a chave pode ser tanto uma função, um número, um objeto e etc,
 * ou seja, há uma maior flexibilidade.
 */

 const tecnologia = new Map()
 tecnologia.set('react', {framework: false})
 tecnologia.set('angular', {framework: true})

 //Forma errada
 console.log(tecnologia.react)
 //Forma certa
 console.log(tecnologia.get('react'))
 console.log(tecnologia.get('react').framework)

 //Outra forma de já criar um MAP atribuindo os elementos
 const chavesVariadas = new Map([
     [function() {}, 'Função'],
     [{}, 'Objeto'],
     [123, 'Número']
 ])

 chavesVariadas.forEach((valor, chave) => {
     console.log(chave, valor)
 })

 //has é a função que diz se o elemento está ou não contido dentro desse map
 console.log(chavesVariadas.has(123))

 //também é possivel excluir um elemento de um MAP
 chavesVariadas.delete(123)
 console.log(chavesVariadas.has(123))

 //também é possivel ver a quantidade de elementos dentro do MAP
 console.log(chavesVariadas.size)

 //No MAP não é possivel ter 2 valores igual do lado da chave
 chavesVariadas.set('123', 'a')
 chavesVariadas.set('123', 'b')
 //Porém do lado do valor é possivel repetição
 chavesVariadas.set('456', 'b')

 console.log(chavesVariadas)


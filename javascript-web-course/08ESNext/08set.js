/**
 * Estrutura adicionada recentemente, set é uma estrutura de conjunto, não indexada e não aceita repetição
 */

 const times = new Set()
 times.add('Ceará')
 times.add('Vasco').add('São Paulo').add('Corinthias')
 times.add('Flamengo')
 //Adicionando o Ceará de novo para mostrar que ele não aceita repetição
 times.add('Ceará')

 console.log(times)
 //Da mesma forma do MAP também temos o size para ver o tamanho
 console.log(times.size)
 //Também temos a função has para saber se determinado elemento existe
 console.log(times.has('Ceará'))
 console.log(times.has('ceará'))
 //Excluir da mesma forma que no MAP
 times.delete('Flamengo')
 console.log(times)
 console.log(times.has('Flamengo'))

 const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
 const nomesSet = new Set(nomes)
 console.log(nomesSet)
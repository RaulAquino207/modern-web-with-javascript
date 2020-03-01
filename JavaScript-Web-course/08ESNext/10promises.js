/**
 * Recurso novo, promise como o próprio nome já diz, ele é uma promessa, é usado quando se quer algum
 * tipo de processamento assíncrono.
 * Uma promise tem 2 grandes destinos, não apenas esses 2, mas esses 2 são os mais naturais de uma promise.
 * 
 * 1 - A promessa ser atendida/cumprida
 * 2 - A promessa ser rejeitada
 * 
 * Exemplo: Digamos que se deseja acessar um arquivo que está remoto, uma das possibilidades de acessar
 * esse arquivo é a partir de um callback, que caso o arquivo seja obtido de forma bem sucedida a callback
 * de sucesso é chamada e caso o arquivo não seja obtido por algum tipo de erro a callback de erro é chamada
 * apresentado a mensagem de erro.
 * A promisse segue mais ou menos essa mesmo ideia - Sucesso ou não sucesso.
 * 
 * Promise é uma estrutura que tem como objetivo apresentar uma função assíncrona que pode ser por sua
 * vez atendida ou rejeitada.
 */


 function falarDepoisDe (segundos, frase){
     return new Promise((resolve, reject) => {
        setTimeout(()=>{
            //RESOLVE aceita apenas UM ÚNICO PARÂMETRO
            resolve(frase)
            //OUTRA OPÇÃO
            //reject(frase)
        }, segundos * 1000)
     })
 }

 falarDepoisDe(3, 'Que legal!')
 //E para acessar de forma correta o resultado de uma promessa, é chamad a função .then()
  .then(frase => frase.concat('?!?!'))
  .then(outraFrase => console.log(outraFrase))
  //OUTRA OPÇÃO
  //.catch(e => console.log(e ))
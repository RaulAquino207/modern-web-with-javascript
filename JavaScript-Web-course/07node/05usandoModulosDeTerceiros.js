/*
Através do npm, iremos isntalar o lodash que é uma biblioteca (npm i lodash), e será criado uma 
pasta chamada node_modules

Agora vamos importar modulos de terceiros, nesse caso de lodash
 */
//Geralmente quando se cria um referencia para o lodash se o _(underline antes)
 const _ = require('lodash')
 setInterval(() => console.log(_.random(5,1000)),2000)

 /**
  * Nessa parte do curso, vamos instalar um biblioteca de maneira global
  * sudo npm i -g nodemon
  * o NODEMON, mesmo após eu atualizar meu código, ele restarta após mudanças e continua executando
  * 
  */
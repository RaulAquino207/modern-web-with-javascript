/**
 * Padrão chain of responsibility, ou padrão middleware, EXPRESS é muito baseado nesse padrão
 * 
 * TEORIA
 * Temos como exemplo um PROCESSO A(1 função)
 * PROCESSO A(1 função)
 * - PASSO A (ex: validar dados)
 * - PASSO B (ex: aplicar lógica)
 * - PASSO C (ex: persistir dados)
 * 
 * Pesando de maneira que esses passo dados como exemplo acima, forem talvez possa ser reusado,
 * da maneira acima não é possível fazer um reuso, pois tudo se encontra dentro de uma única função.
 * 
 * Uma possível refatoração desse código exemplo para poder ser feito o reuso, seria com listado abaixo
 * 
 * PROCESSO A(3)
 * - PASSO A(chama o passo b) => PASSO B(chama o passo c) => PASSO C
 * 
 * Porém essa ideia se da, se logo após a chamada do PASSO A, também for necessário a chamada do 
 * PASSO B e assim por diante, ou seja, ainda há de certa forma uma AMARRAÇÃO entre as funções.
 * 
 * ---------------------------------------------------------------------------------------------
 * O padrão chain of responsibility, tem como ideia separar um processo em pequenos passo, só que a 
 * lógica do proximo passo NÃO HÁ uma AMARRAÇÃO específica. 
 * 
 * Irá ser passado para a sua função middleware dados que no EXPRESS será request e response, e esses
 * dados são passados para uma sequência de passos. O que é importante no chain of responsibility é
 * o fato que não existe um acoplamento para o próximo passo, quem conhece a sequência seria no caso
 * a "corrente" e não propriamente o PASSO, o passo nesse caso é independente, é possivel até mesmo
 * trocar a sequência dos passos.
 * 
 * NO FINAL DAS CONTAS irá ser passado como parâmetro para a função, uma função next() e essa função
 * é responsável por disparar o próximo passo. Caso o middleware não queira disparar o próximo passo,
 * ele pode simplesmente não invocar a função next(), ou até mesmo nem ter essa função nos seus parâmetros,
 * até porque em JS, quando um dos parâmetros não é passado é atribuído a ele o valor de undefined.
 * 
 */

 //Middleware pattern (chain of responsibility)
 /**
  * - CTX nesse caso seria o CONTEXTO, é um obj que vai sendo passado de um PASSO para o outro, esse obj
  * é importante pois é ele que carrega os dados de um passo para o outro.
  * 
  * - NEXT seria a próxima função que seria chamada a partir da minha função atual, e caso não seja 
  * necessário fazer a chamada de outra função basta apenas omitir o parâmetro next do meu passo.
  */
 const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
 }

 const passo2 = (ctx, next) => {
     ctx.valor2 = 'mid2'
     next()
 }

 const passo3 = (ctx) => {
    ctx.valor3 = 'mid3'
}

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }

    execPasso(0)
}
//De forma sequencial
const ctx = {}

exec(ctx, passo1, passo2, passo3)

console.log(ctx)

//De forma não sequencial, o que é possivel por conta do uso do chain of responsibility
const ctx1 = {}

exec(ctx1, passo3, passo2, passo1)

console.log(ctx1)
const schedule = require('node-schedule')
//Tarefa temporizada
/**
 * O Parâmetro que é passado é uma string que contem informações que serão respeitadas pelo temporizador
 * 
 * *"/"5 *- de cinco em cinco segundos
 * * 18 *- 18 horas
 * * * - O espaço entre asterisco depois do 12 sem conter nada, significa que ele está ignorando o dia do mês
 * * 6 - significa que é no sábado em qualquer minuto
 */
const tarefa1 = schedule.scheduleJob('*/2 * 18 * * 6', () => {
    console.log('Executando tarefa 1!', new Date().getSeconds())
})
//setTimeout é um temporizador padrão do JS
setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,6)]
regra.hour = 18
regra.second = 20

const tarefa2 = schedule.scheduleJob(regra, ()=>{
    console.log('Executando tarefa 2!', new Date().getSeconds())
})

setTimeout(()=>{
    tarefa2.cancel()
    console.log('Cancelando a tarefa 2!')
},30000)

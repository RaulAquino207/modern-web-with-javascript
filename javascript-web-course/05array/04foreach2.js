//COPIADO DO EXEMPLO PASSADO PARA QUE POSSAMOS IMPLEMENTAR O METODO FOREACH do 0
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
/*
A função callback do Foreach pode receber 1,2 ou 3 parâmetros sendo eles:
1 - O valor de cada posição
2 - O indice das posições
3 - O array completo
*/
//Chamando foreach2, onde esse foreach2 é a nossa função implementada
aprovados.forEach2(function(nome,indice, array){
    console.log(`${indice + 1}: ${nome}`)
    console.log(array)
    console.log()
})
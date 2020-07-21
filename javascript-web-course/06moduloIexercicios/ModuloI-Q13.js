/*
[ModuloI-Q13] - Implemente o getter e o setter em um objeto para o atributo temp , 
em que não permita que o valor seja negativo lançando uma exceção. O nome das funções getter 
e setter devem ser temperatura .

RESPOSTA:
*/

const obj = {
    //convenção para informar que a variavel tem pretenção de ser acessada apenas internamente
    _temp: 0,
    //implemente aqui
    get temperatura(){
        return console.log(`O valor da temperatura é ${this._temp} °C`)
    },
    set temperatura(temp){
        try{
            if(temp < 0){
                throw new Error('Error')
            }else{
                this._temp = temp
            }
        }catch(e){
            console.log('O valor de temperatura negativo não é válido')
        }
    }
    
}

obj.temperatura
obj.temperatura = -5
obj.temperatura = 30
obj.temperatura
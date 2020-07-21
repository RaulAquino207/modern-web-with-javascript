function Pessoa(){
    this.idade = 0
    
    const self = this
    setInterval(function(){
        /*this*/self.idade ++
        console.log(self.idade)
    //sem o .bind(this) ele retornaria um NAN
    //porém também há o artifício de usar o self passando ele como const e substituindo ele pelo this
    }/*.bind(this)*/, 1000)
}

new Pessoa
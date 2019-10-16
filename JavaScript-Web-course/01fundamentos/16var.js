//ctrl + shift + i = indentação
/*
Criar um variavel com VAR mesmo fora do escopo vc consegue acessá-la.
Isso não se aplica para o escopo de uma função
*/

{ 
    { 
        { 
            { 
                var show = 'show' 
                console.log(show)
            } 
        } 
    } 
}
console.log(show)

function teste(){
    var local = 123
    console.log(local)    
}

teste()
//não seria possivel usar esse console.log pois a variavel só é visivel dentro da função
//console.log(local)
const ferrari = {
    modelo: 'f40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}
//__proto__ a partir disso eu consigo acessar quem é o protótipo desse obj, quem seria o obj PAI
console.log(ferrari.__proto__)
/*Quando não há uma classe pai definida,da mesma forma como acontecia em JAVA, 
ele aponta para a classe OBJ
*/
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function MeuObjeto(){
    console.log(typeof Object, typeof MeuObjeto)
    console.log(Object.prototype, MeuObjeto.prototype)
}

MeuObjeto()
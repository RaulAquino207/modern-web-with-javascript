function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m²`)
    }else{
        return area
    }
}

console.log(area(2,2))
console.log(area(4,6))
console.log(3,4,2,7,12)
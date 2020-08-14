function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

function gerarValores(bits){
    const valores = [];
    for(let i = 0; i < Math.pow(2, bits); i++){
        valor = randomInt(100,500);
        valores.push(valor);
    }
    console.log(valores);
    return valores;
}

function qtdPixels(pixels,bits){
    
    while(soma != pixels){
        var vetor = gerarValores(bits);
        var soma = vetor.reduce((ac,va) => ac + va);
        console.log(soma)
    }

    return soma;

}

qtdPixels(4096, 4); 
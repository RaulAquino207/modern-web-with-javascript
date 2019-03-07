/*
Há uma diferença de escopo.

Você deve saber que qualquer variável "declarada" sem let, var ou const tem escopo global, vale 
para todo o script.

Talvez saiba que sempre deve usar o var para tornar o escopo local, ou seja ele vale apenas 
dentro da função onde ela foi declarada (pode ser global se não está dentro de função).

Mas isto não era suficiente, precisa ter um um escopo de bloco. O let foi criado, e está disponível 
nas versões mais novas da linguagem justamente para prover este escopo mais limitado.
*/

function exemplo() {
    //x poderia ser acessado aqui
    for(var x = 0; x < 5; x++) {
        //x existe aqui
    };
    //x está visível aqui novamente
};
function exemplo() {
    //x não existe aqui
    for(let x = 0; x < 5; x++ ) {
        //x existe aqui
    };
    //x não está visível aqui novamente
};
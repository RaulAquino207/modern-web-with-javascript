/*
[ModuloI-Q12] - Transforme a seguinte operação ternária em uma instrução if. 
*/

const value = a ? b ? 1 : -1 : 0

if (a){
    if(b){
        return 1
    }else if(b){
        return -1
    }
} else {
    return 0
}

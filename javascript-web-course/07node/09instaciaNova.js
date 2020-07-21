//Uma factory retorna um novo objeto
module.exports = () => {
    return {
        valor: 1,
        incr(){
            this.valor++
        }
    }
}
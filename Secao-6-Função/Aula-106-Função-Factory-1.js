// Função para fabricar objetos
// Factory simples que retorna um object de um produto
function criarProduto() { 
    return {
        nome: 'Caneca inox',
        funcionalidade: 'servir bebidas, café, água',
        preco: 5,

        descontoPorcent: function(preco) {
            return this.preco - (this.preco * 0.1)
        }
    }
}

console.log(criarProduto().descontoPorcent())
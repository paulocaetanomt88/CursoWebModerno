Array.prototype.map2 = function(funcao_callback) {
    let novo_array_modificado = []

    for (let i = 0; i < this.length; i++) { 
        novo_array_modificado.push(funcao_callback(this[i], i, this))
    }

    return novo_array_modificado;
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.95 }',
    '{ "nome": "Kit de Lapis", "preco": 41.00 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => `R$ ${parseFloat(produto.preco).toFixed(2).replace('.', ',')}`

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)
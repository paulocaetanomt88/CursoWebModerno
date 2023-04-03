function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = { 
    nome: 'Desktop',
    preco: 5000,
    desconto: 0.10,
    getPreco 
}

console.log(produto.getPreco())

const carro = { preco: 48999, desconto: 0.2}

console.log(getPreco.call(carro)) // .call chama a função getPreco() e recebe como parâmetro um objeto
console.log(getPreco.apply(carro)) // .apply também chama a função getPreco() e recebe um objeto como parâmetro

// a diferença está na passagem de parâmetros

// Exemplo com .call
console.log(getPreco.call(carro, 0.17, '$'))

// Exemplo com .apply os parâmetros são passados em um vetor (array)
console.log(getPreco.apply(global, [0.17, '$']))
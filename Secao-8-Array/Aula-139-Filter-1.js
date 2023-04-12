const produtos = [
    { nome: 'Notebook', preco: 3499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Barra de alter', preco: 15.99, fragil: false },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Anilhas 5kg', preco: 50, fragil: false },
]

console.log(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
const naoFragil = produto => !produto.fragil


console.log(produtos.filter(caro).filter(fragil))
console.log(produtos.filter(fragil))
console.log(produtos.filter(naoFragil))
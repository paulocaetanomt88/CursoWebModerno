// Um objeto é um conjunto de propriedades definidas por chave e valor
const produto1 = {} // criando uma constante produto1 que recebe um objeto vazio

produto1.nome = 'Samsung Galaxy A12' // definindo a propriedade 'nome' e seu valor string para o objeto

produto1.preco = 1200.00 // definindo a propriedade preco e valor numerico

produto1.desconto = 0.10 // definindo a propriedade desconto
produto1['desconto'] = 0.10 // outra forma de definir uma propriedade

console.log(produto1)

// um objeto pode conter outro(s) objeto(s) aninhados
const produto2 = {
    nome: 'Camisa Polo',
    preco: 79.00,
    detalhes: {
        cor: 'Verde',
        tamanhos: ['p', 'm', 'g']
    }
}

console.log(produto2);
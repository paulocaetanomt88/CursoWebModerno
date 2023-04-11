// coleção dinâmica de pares chave: valor
const produto = new Object

produto.nome = 'Cadeira' // criando um atributo e atribuindo valor fora dos pares { } do objeto usa-se sinal de igual =
produto.preco = 49.90
produto['marca'] = 'Genérica' // usando o padrão de atribuição de array também funciona
console.log(produto)

delete produto.preco // removendo o atributo preco
delete produto['marca'] // outra forma de remover um atributo
console.log(produto)

const carro = {
    modelo: 'A4',
    marca: 'Audi',
    valor: 89000,
    proprietario: {
        nome: 'Paulo',
        idade: 34,
        endereco: {
            rua: 'rua Abc',
            numero: 123,
            bairro: 'Alphaville'
        },
    },
    condutores: [{
        nome: 'Motorista 1',
        idade: 35
    }, {
        nome: 'Motorista 2',
        idade: 40
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.cidade = "Cuiabá"
carro['proprietario']['endereco']['estado'] = 'Mato Grosso'

console.log(carro)

// removendo atributos e métodos de carro
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)

console.log(carro.condutores)
console.log(carro.condutores.length)
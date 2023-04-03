// criando a constante soma que recebe uma função anônima
const soma = function (x, y) {
    return x + y
}

// a constante imprimeResultado recebe uma função anônima que recebe parâmetros: a, b e operacao assumindo soma()
const imprimeResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimeResultado(8, 4)
imprimeResultado(8, 4, soma)
imprimeResultado(8, 4, function (x, y) { return x - y })
imprimeResultado(8, 4, function (x, y) { return x * y })

const pessoa = {
    // o atributo falar do objeto pessoa recebe uma função anônima
    falar: function() {
        console.log('Opa!')
    }
}

pessoa.falar()
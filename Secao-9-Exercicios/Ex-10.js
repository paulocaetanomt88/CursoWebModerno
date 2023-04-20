// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo '+' na quantidade especificada no parâmetro

function stringMais(numero) {
    let texto = '';
    for (let i=0; i<numero; i++) {
        texto += '+'
    }

    return texto
}

console.log(stringMais(4))

// resolução 2:
function simboloMais(qtd) {
    return Array(qtd).fill('+').join('')
}

console.log(stringMais(3))

// resolução 3:
function simboloMais2(quantidade) {
    return "+".repeat(quantidade)
}
console.log(stringMais(5))
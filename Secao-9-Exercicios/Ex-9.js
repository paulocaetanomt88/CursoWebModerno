// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será
// o número de vezes que haverá repetição. Um array será retornado.

function repetir(elemento, qtdRepeticao) {
    resultado = []
    for (let i = 0; i < qtdRepeticao; i++) {
        resultado.push(elemento)
    }
    return resultado
}

console.log(repetir("teste", 3))
console.log(repetir(true, 3))

// resolução 3
function repetir2(item, quantidade) {
    return Array(quantidade).fill(item)
}

console.log(repetir("teste", 3))
console.log(repetir(true, 3))
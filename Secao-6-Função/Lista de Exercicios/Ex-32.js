/*
Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

function mediaAritmetica(vetorDeNumeros) {
    let contador = 0
    let somaNumeros = 0
    let media = 0

    for (let i = 0; i < vetorDeNumeros.length; i++ ) {
        somaNumeros += vetorDeNumeros[i]
        contador++
    }

    media = somaNumeros / contador;

    return `Média aritmética: ${media}`
}

console.log(mediaAritmetica([7, 8, 9, 7, 8, 9, 7, 8, 9]))

/*
Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

function contaNegativos(vetorDeNumeros) {
    let negativos = 0

    for (let i=0; i<vetorDeNumeros.length; i++) {
        if (vetorDeNumeros[i] < 0) {
            negativos++
        }
    }

    return `Negativos: ${negativos}`;
}

console.log(contaNegativos([-1, -2, -3, 1, 2, 3, -3, 3, -2, 2, -1, 1]))

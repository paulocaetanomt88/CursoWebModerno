/*
Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/

function maiorMenor(vetorDeNumeros) {
    let maior = 0
    let menor = vetorDeNumeros[0]
    let numeroAnterior = 0

    for(let i=0; i<=vetorDeNumeros.length; i++) {

        
        if (i>0 && vetorDeNumeros[i] > vetorDeNumeros[i-1]) {
            maior = vetorDeNumeros[i]
        }

        if (i>0 && vetorDeNumeros[i] < vetorDeNumeros[i-1]) {
            menor = vetorDeNumeros[i]
        }
    }

    return `Maior: ${maior} e menor: ${menor}`
}

console.log(maiorMenor([20, 3, 10, 14, 16, 17, 19, 20, 22, 26]))
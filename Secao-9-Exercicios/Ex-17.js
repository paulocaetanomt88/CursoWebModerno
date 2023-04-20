/*
Escreva uma função que receba um array de números e retornará a soma de todos os números desse array
*/
function somarNumeros(vetor) {
    let soma = 0

    for (let i=0; i<vetor.length; i++) {
        soma += vetor[i]
    }

    return soma
}

vetor1 = [10, 20, 30]

console.log(somarNumeros(vetor1))
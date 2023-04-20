// criar uma função que receba um array de números e retorne o menor número desse array
function menorNumero(numeros) {
    let menor = numeros[0]

    for (let i in numeros) {
        if (numeros[i] < menor) menor = numeros[i]
    }

    return menor
}

console.log(menorNumero([7, 4, 3, 4, 5, 8]))
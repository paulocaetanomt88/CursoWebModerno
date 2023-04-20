/*
Elabore uma função que receba um array de números 
e retorne um array que tenha todos os números que são pares 
e que também tenham índices pares
*/

function somenteNumerosParesComIndicesPares(vetorDeNumeros) {
    const resultado = []

    for(i=0; i<vetorDeNumeros.length; i++) {
        if(i%2===0 && vetorDeNumeros[i]%2===0) {
            resultado.push(vetorDeNumeros[i])
        }
    }

    return resultado
}

let vetor1 = [10, 12, 20, 21, 30, 31, 40, 45, 50, 53, 60, 67, 70]

console.log(somenteNumerosParesComIndicesPares(vetor1))
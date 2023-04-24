/*
    Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array
*/

function segundoMaior(numeros) {
    let indiceDoMaior = 0
    let segundoMaior

    numeros.forEach( (numero, indice) => {
        if (numero > numeros[indiceDoMaior])
            indiceDoMaior = indice
    })

    numeros.splice(indiceDoMaior, 1)
    segundoMaior = numeros[0]

    numeros.forEach(numero => {
        if (numero > segundoMaior) {
            segundoMaior = numero
        }
    })

    return segundoMaior
}

console.log(segundoMaior([10, 3, 15, 21]))

// resolução 2
function segundoMaior2(numeros) {
    // pega o maior número
    const maiorNumero = Math.max(numeros)

    // gera um novo array pegando apenas os números que forem diferentes do maior número e sobrescreve numeros
    numeros = numeros.filter(numero => numero != maiorNumero)

    // pega o segundo maior
    const segundoMaior = Math.max(numeros)

    return segundoMaior
}

console.log(segundoMaior([10, 3, 15, 21]))

// resolução 3
function segundoMaior3(numeros) {
    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundoMaior = numerosOrdenados[1]

    return segundoMaior
}
console.log(segundoMaior3([10, 3, 15, 21]))
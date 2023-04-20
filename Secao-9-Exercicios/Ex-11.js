// Crie uma funçao que receba uma array e retorne o primeiro e o último elemento desse array como um novo array

function primeiroUltimo(vetor) {
    resultado = []

    resultado.push(vetor[0])
    resultado.push(vetor[vetor.length-1])

    return resultado
}

let vetor1 = ['primeiro', 'segundo', 'terceiro', 'quarto', 'quinto']

console.log(primeiroUltimo(vetor1))

// resolução 2
function primeiroUltimo2(vetor) {
    const primeiroElemento = elementos.shift()
    const ultimoElemento = elementos.pop()

    return [primeiroElemento, ultimoElemento]
}

let vetor2 = ['José', 'Maria', 'João', 'Joaquina', 'Sebastião']

console.log(primeiroUltimo(vetor2))

// resolução 3
function primeiroUltimo3([primeiroElemento, ...elementosRestantes]) {
    const ultimoElemento = elementosRestantes.pop()

    return [primeiroElemento, ultimoElemento]
}

let vetor3 = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio']

console.log(primeiroUltimo(vetor3))
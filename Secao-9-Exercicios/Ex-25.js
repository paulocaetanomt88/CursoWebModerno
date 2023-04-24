/*
A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para identificar palavras semelhantes
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de strings.
*/

function buscarPalavrasSemelhantes(palavra, vetorDePalavras) {
    let resultado  = []

    for (let i = 0; i<vetorDePalavras.length; i++) {
        if (vetorDePalavras[i].includes(palavra)) { // .includes() retorna a ocorrencia do parÂmetro recebido dentro do array em que foi chamado.
            resultado.push(vetorDePalavras[i])
        }
    }

    return resultado
}

console.log(buscarPalavrasSemelhantes('pro', ['programação', 'mobile', 'profissional']))

// resolução 2
function buscarPalavrasSemelhantes2(inicio, palavras) {
    const resultado = []

    for (let palavra of palavras)
        if (palavra.includes(inicio))
            resultado.push(palavra)

    return resultado
}

console.log(buscarPalavrasSemelhantes2('pro', ['programação', 'mobile', 'profissional']))

// resolução 3
function buscarPalavrasSemelhantes3(inicio, palavras) {
    return palavras.filter(palavra => palavra.includes(inicio))
}

console.log(buscarPalavrasSemelhantes3('pro', ['programação', 'profissional', 'mobile']))
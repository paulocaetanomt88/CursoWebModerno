// Criar uma funçao que receba uma string como parametro e conte quantas palavras tem nela

function contarPalavras(frase) {
    const palavras = frase.split(" ")
    
    return palavras.length
}

console.log(contarPalavras("o crima tá compretamente nubrado"))
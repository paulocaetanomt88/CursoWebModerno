function getInteiroAleatorioEntre(min, max) {
    const valorAleatorio = Math.random()
    const valor = valorAleatorio * (max-min) + min

    return Math.floor(valor)
}

let opcao = 0

// while geralmente é usado quando não se sabe a quantidade exata de repetições
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Oção escolhida foi ${opcao}.`)
}
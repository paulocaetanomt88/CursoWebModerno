/*
Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será gerado um número aleatório de 1 a 10
A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado internamente. Se o valor fornecido foi o sorteado, retorne
"Parabéns, O número sorteado foi o X". Se não for igual, retorne "Que pena! o número sorteado foi o X", onde X é o número sorteado
*/
function geraNumero1a10(numEscolhido) {
    const min = 1;
    const max = 10;

    const numAleatorio = Math.floor(Math.random() * (max - min + 1) + min)

    return ( numEscolhido === numAleatorio ? 
        `Parabéns! O número sorteado foi o ${numAleatorio}` : 
        `Que pena! O número sorteado foi o ${numAleatorio}` )
}

console.log(geraNumero1a10(3))
console.log(geraNumero1a10(4))
console.log(geraNumero1a10(5))
console.log(geraNumero1a10(6))
console.log(geraNumero1a10(7))
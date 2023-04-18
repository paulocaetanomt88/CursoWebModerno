// Implementando nosso prórpio método reduce()

// definindo um método no prototype de Array, esta funçao fica disponível para todos os arrays
Array.prototype.reduce2 = function(callback, valorInicial) {
    // acumulador pega o valorInicial ou, se este parâmetro for omitido, pega o valor do primeiro elemento na posição 0 do array
    let acumulador = valorInicial || this[0]

    // se o parâmetro valorInicial for passado, o indiceInicial para o laço for() começa com 0 para considerar desde o primeiro elemento do array,
    // caso o parâmetro valorInicial for omitido, o indiceInicial começa a partir do segundo elemento do array
    const indiceInicial = valorInicial ? 0 : 1

    // percorrendo o array a partir do indiceInicial
    for (let i = indiceInicial; i<this.length; i++) {
        // o resultado da chamada da função calback vai passar para o acumulador
        acumulador = callback(acumulador, this[i], i, this)
    }

    // retornando o resultado do acumulador no reduce2()
    return acumulador
}

const soma = (total, valorItemAtual) => total + valorItemAtual
const nums = [1, 2, 3, 4, 5, 6]

console.log(nums.reduce2(soma))

console.log(nums.reduce2(soma, 14))
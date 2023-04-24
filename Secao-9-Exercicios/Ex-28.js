/*
Elabore uma função que recebe dois parâmetros: 
o primeiro é um array de números e o segundo é um número que especifica uma quantidade de dígitos.
Essa função deverá retornar somente aqueles números do array que
*/
function filtrarPorQuantidadeDeDigitos(arrayDeNumeros, quantidadeDesejada) {
    let resultado = []

    for (numero of arrayDeNumeros) {
        // passa pra string (que também é um array de caracteres) e por isso pode pegar o length (quantidade de caracteres)
        // que no caso dos números são suas casas decimais
        const quantidadeDeDigitos = String(numero).length 

        // se for executar apenas um comando após a verificação do if, nao necessita usar o par de chaves {}
        if (quantidadeDeDigitos === quantidadeDesejada) 
            resultado.push(numero)
    }

    return resultado
}

console.log(filtrarPorQuantidadeDeDigitos([35, 2, 365, 10, 380, 11], 2))

// resolução 2
function filtrarPorQuantidadeDeDigitos2(arrayDeNumeros, quantidadeDesejada) {
    return arrayDeNumeros.filter( numero => {
        const quantidadeDeDigitos = String(numero).length

        return quantidadeDeDigitos === quantidadeDesejada
    })
}

console.log(filtrarPorQuantidadeDeDigitos2([35, 2, 365, 10, 380, 11], 2))
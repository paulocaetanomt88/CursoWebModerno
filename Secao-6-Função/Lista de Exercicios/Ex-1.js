/*
Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.
*/

function operacoesAritmeticas(a, b) {
    return {
        soma: a + b,
        subtracao: a - b,
        multiplicacao: a * b,
        divisao: a / b
    }
}

console.log(operacoesAritmeticas(6, 2))
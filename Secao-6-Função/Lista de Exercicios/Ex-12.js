/*
Faça um algoritmo que calcule o fatorial de um número.
*/

function fatorial(numero) {
    let resultado = numero;

    for(let i = (numero-1); i > 1; i--) {
        resultado *= i
    }

    return resultado
}

console.log(fatorial(5))
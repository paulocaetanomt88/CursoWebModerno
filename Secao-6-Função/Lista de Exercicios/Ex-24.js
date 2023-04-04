/*
Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.
*/

function imprime11x(frase) {
    let i = 1;

    while(i<=11) {
        console.log(frase, i);
        i++
    }

    return true;
}

console.log(imprime11x("Bom dia!"))
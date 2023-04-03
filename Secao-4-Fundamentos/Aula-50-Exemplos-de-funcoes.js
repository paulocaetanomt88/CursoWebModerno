// Função sem retorno
function imprimirSoma(a, b, c) {
    if(isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log( "Um dos parâmetros recebidos não é um número!")
    } else {
        console.log(a + b + c);
    }
}

imprimirSoma(1, 2, 3) // imprime a soma no console
imprimirSoma(5, 7) // retornaria erro Not a Number
imprimirSoma(10, 20, 30, 40, 25, 37); // imprime a soma dos três primeiros parâmetros no console e ignora os outros parâmetros
imprimirSoma(90, 80, "setenta") // retornaria erro Not a Number

// Função com retorno

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) // retorna not a number
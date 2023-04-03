// criando variaveis usando o operador destructuring,
// cada elemento do array à esquerda receberá como valor o elemento do array à direita,
// segundo a ordem da posição de cada um
const [a, b, c, d] =  [3, 5, 1, 15]

// operações aritméticas
const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2

console.log("Soma = " + soma + "\n" + 
            "Subtração = " + subtracao + "\n" + 
            "Multiplicação = " + multiplicacao + "\n" +
            "Divisão = " + divisao + "\n" +
            "Módulo = " + modulo + "\n")

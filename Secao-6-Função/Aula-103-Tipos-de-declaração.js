// function declaration     * dessa forma a função pode ser chamada antes de ser declarada
console.log('Soma: '+soma(3, 2))
function soma(x, y) {
    return x + y
}

// function expression    * não pode ser chamada antes de ser declarada
const sub = function(x, y) {
    return x - y
}
console.log('Subtração: '+sub(3, 2))

// named function expression       *pouco usada mas é melhor para debugar * não pode ser chamada antes de ser declarada
const mult = function mult(x, y) {
    return x * y
}
console.log('Multiplicação: '+mult(3, 2))
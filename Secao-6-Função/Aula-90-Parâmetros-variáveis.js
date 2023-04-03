function soma() {
    let soma = 0

    // arguments[] é um array interno de uma função que possui todos os argumentos que foram passados
    for (i in arguments) {
        soma += arguments[i] 
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(4.2, 3.4, 9.8))
console.log(soma(4.2, 3.4, "Concatenou com Texto"))
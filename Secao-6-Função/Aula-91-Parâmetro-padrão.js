// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1

    return a + b + c
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(0, 0, 0))

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    // operador ternário: caso 'a' for diferente de undefined mantém o valor de a, senão recebe 1
    a = a !== undefined ? a : 1

    // operador ternário: existe o argumento de índice 1, se existir pega o valor de a, senão recebe 1
    b = 1 in arguments ? b : 1

    // operador ternário: c não é um número? se não for, recebe 1, se for um número recebe o valor de c
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log(soma2(), soma2(5), soma2(4, 5, 6), soma2(0, 0, 0)) 

// valor padrão do es2015
function soma3(a=1, b=1, c=1)
{
    return a + b + c
}

console.log(soma3(), soma3(5), soma3(4, 5, 6), soma3(0, 0, 0)) 
// Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto ! no final

function cumprimentar(nome) {
    return `Olá, ${nome}!`
}

console.log(cumprimentar('Paulo'))

// resolução 2
function cumprimentar2(nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat('!')
}

console.log(cumprimentar2('Paulo'))
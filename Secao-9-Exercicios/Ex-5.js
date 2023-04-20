/*
    Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar números de strings.
*/

function maiorOuIgual(primeiro, segundo) { 
    // verificando se os tipos do primeiro ou do segundo é diferente de número
    if (typeof primeiro != 'number' || typeof segundo != 'number') return false
    
    // verificando se o tipo do primeiro é diferente do segundo
    if (typeof primeiro != typeof segundo) return false

    return primeiro >= segundo
}

console.log(maiorOuIgual(1, 0))
console.log(maiorOuIgual('1', 0))

console.log(typeof true)
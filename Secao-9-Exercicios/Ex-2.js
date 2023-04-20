// Crie uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.


function converteIdadeEmDias(numero) {
    const anosBissextos = numero / 4
    const dias = numero * 365 + anosBissextos;

    return `Aproximadamente ${Math.floor(dias)} dias.`
}

console.log(converteIdadeEmDias(34))
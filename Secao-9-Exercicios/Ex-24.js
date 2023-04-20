/*
Desenvolva uma função que recebe um caractere e uma string como parametros e retorne a quantidade de vezes que o caractere se repete
A função deverá ser case-sensitive
*/

function contarCaractere(caractere, frase) {
    let contador = 0

    for (let i=0; i<frase.length; i++) {
        if(frase.charAt(i) === caractere) contador++
    }

    return contador
}

console.log(contarCaractere("r", "A sorte favorece os audazes"))
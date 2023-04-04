/*
Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
*/

vetorInteiro = [1, 2, 3, 4]
vetorString = ["Cuiabá", "Várzea Grande", "Chapada", "Poconé"]
vetorDouble = [1.1, 2.2, 3.3, 4.4]


function concatenar(...args) {
    let resultado = []
    
    for(i=0; i<arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }

    return `Vetores concatenados: ${resultado}`
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorInteiro, vetorDouble))
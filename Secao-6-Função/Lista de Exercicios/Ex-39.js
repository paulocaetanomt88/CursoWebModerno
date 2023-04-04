/*
Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.
*/

function trocaVetores(vetor1, vetor2) {
    if(vetor1.length == vetor2.length) {
        for(let i=0; i<vetor1.length; i++) {
            vetor1[i] = vetor1[i] + vetor2[i]
            vetor2[i] = vetor1[i] - vetor2[i]
            vetor1[i] = vetor1[i] - vetor2[i]
        }
    } else {
        return "os vetores não são de tamanho iguais"
    }

    console.log('vetor 1: ' + vetor1)
    console.log('vetor 2: ' + vetor2)
}
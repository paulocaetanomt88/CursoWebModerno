/*
Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
*/

function multiplicaVetor(vetor, inteiro) {
    let vetorResultado1 = []
    
    vetor.forEach(elemento => {
        vetorResultado1.push(elemento * inteiro)
    });

    return vetorResultado1;
}

function multiplicaSeInteiroMaiorQue5(vetor, inteiro){
    let vetorResultado2 = []

    if(inteiro > 5) {
        vetor.forEach(elemento => {
            vetorResultado2.push(elemento * inteiro)
        });
        return vetorResultado2;
    } else {
        return "O multiplicador precisa ser maior que 5"
    }

    
}

console.log(multiplicaVetor([2, 3], 2))

console.log(multiplicaSeInteiroMaiorQue5([2, 3], 4))
console.log(multiplicaSeInteiroMaiorQue5([2, 3], 6))
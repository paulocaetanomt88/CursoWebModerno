/*
Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/
function intervalo10a20(vetorDeNumeros) {
    let contador = 0;
    let dentroDoIntervalo = []
    for(let i = 0; i<vetorDeNumeros.length; i++) {
        if(vetorDeNumeros[i]>=10 && vetorDeNumeros[i]<=20) {
            contador++
            dentroDoIntervalo.push(vetorDeNumeros[i])
        }
    }
    return `${contador} números estão no intervalo [10, 20]. São eles: ` + dentroDoIntervalo
}

console.log(intervalo10a20([1, 3, 10, 14, 16, 17, 19, 20, 22, 26]))
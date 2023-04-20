/*
Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro
*/

function filtrarNumeros(vetor) {
    const resultado = []
    for (let i=0; i<vetor.length; i++){
        if(typeof vetor[i] == 'number') {
            resultado.push(vetor[i])
        }
            
    }

    return resultado;
}

console.log(filtrarNumeros(['elemnto tipo texto', 3, 'outroTexto', 1.2]))
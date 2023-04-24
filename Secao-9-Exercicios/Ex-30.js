/*
Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num array, conforme exemplo abaixo.
Você deverá calcular a média da nota de cada aluno e retornar um objeto com os atributos nome e media e
que indica o aluno que teve o melhor desempenho nas notas
Exemplo:
receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875}
*/

// resolução 1
// criando uma função para somar os valores de um array recebido
const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)

// criando a função que calcula a média entre o resultado da soma e a quantidade de elementos do array
const media = array => soma(array) / array.length

// a função recebe um objeto contendo estudantes e suas notas
function receberMelhorEstudante(estudantes) {
    const estudantesComMedias = Object.entries(estudantes).map( estudante => {
        return { nome: estudante[0], media: media(estudante[1])}
    })

    const estudantesOrdenados = estudantesComMedias.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
    const melhorEstudante = estudantesOrdenados[0]

    return melhorEstudante
}

console.log(receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}))
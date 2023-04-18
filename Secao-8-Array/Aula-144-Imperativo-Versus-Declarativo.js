const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo
let total1 = 0

for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

// Declarativo promove o reuso com funções pequenas e especialistas
const getNota = aluno => aluno.nota // pega apenas o atributo nota do array
const soma = (total, atual) => total + atual // função callback que soma os valores dos elementos

// obtém o total primeiro pegando só as notas do array, para aplicar o .reduce() com a função de somar estes elementos
// e reduzir (agregar tudo) a um valor (total) de retorno
const total2 = alunos.map(getNota).reduce(soma) 
const media = total2 / alunos.length // obtém a média dividindo o total das notas pelo número de alunos

console.log(media)
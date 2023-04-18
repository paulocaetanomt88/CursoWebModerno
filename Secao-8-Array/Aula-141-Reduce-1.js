const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true  },
    { nome: 'Pedro', nota: 9.8,  bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// imprimindo apenas as notas sem alterar o array original
console.log(alunos.map(a => a.nota))

// aplicando reduce
// reduce espera dois parâmetros,
// o primeiro parâmetro é uma função que recebe 2 parâmetros: valorAnterior e valorAtual. A cada iteração do for interno do reduce() vai somar o valorAtual ao valorAnterior
// o segundo parâmetro é um valor pré estabelecido para início, que pode ser 0
const resultado = alunos.map(a => a.nota).reduce(function(valorAnterior, valorAtual) {
    //console.log(acumulador, atual)
    return valorAnterior + valorAtual
}, 1)

console.log(resultado)
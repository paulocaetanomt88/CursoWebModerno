const alunos = [
    { nome: 'João', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: false  },
    { nome: 'Pedro', nota: 9.8,  bolsista: true },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsista?
// avalia se resultado e bolsista são 'true' e armazena a resposta em resultado para a próxima comparação
const todosBolsistas = (resultado, bolsista) => resultado && bolsista

console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
// novo recurso do ES2015

const pessoa = {
    nome: 'Paulo',
    idade: 34,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 321
    }
}

// extraia nome e idade do objeto contido na constante pessoa
const { nome, idade } = pessoa
console.log(nome, idade)

// faz a mesma coisa, porém renomeando as variáveis extraídas para n e i
const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorado = true } = pessoa
console.log(sobrenome, bemHumorado)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num }} = pessoa
console.log(ag, num)
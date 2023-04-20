/*
Você está trabalhando numa aplicação pessoal de controle de despesas.
Na tela principal dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço.
Uma funcionalidade que você está desenvolvendo no momento é a de somar o total das despesas.

Crie uma função que receba um array de produtos e retorne o total das despesas.
*/

function despesasTotais(vetor) {
    let total = 0

    for (let i=0; i<vetor.length; i++) {
        total += vetor[i].preco
    }

    return total
}

let despesas = [
    {nome: "jornal", categoria: 'informação', preco: 89.99},
    {nome: "cinema", categoria: 'entretenimento', preco: 150}
]

console.log(despesasTotais(despesas))
// Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês, e o outro é quanto ele recebe por hora.
// O retorno da função deve ser a string "Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês. Exemplo:
// calcularSalario(150, 40.5) retornará "Salário igual a R$ 6075"

function calcularSalario(qtdHoras, valorHora) {
    const salario = qtdHoras * valorHora;

    return `Salário igual a R$ ${salario}`;
}

console.log(calcularSalario(150, 40.5))
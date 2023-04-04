/*
Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

function calculaValorAnuidade(mes, valor) {
    let mesesDeAtraso = mes - 1;

    if(mesesDeAtraso > 0) {
        for(let i = 1; i <= mesesDeAtraso; i++) {
            valor *= (1 + 0.05)
        }
    }

    return valor
}

console.log("valor da anuidade corrigido = " + calculaValorAnuidade(2, 100))
console.log("valor da anuidade corrigido = " + calculaValorAnuidade(3, 100))
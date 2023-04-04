/*
Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano A - 10%
Plano B - 15%
Plano C - 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function calculaAumento(plano, salario) {
    switch(plano.toUpperCase()) {
        case "A":
            return salario + (salario * 0.1)
            break;
        case "B":
            return salario + (salario * 0.15)
            break;
        case "C":
            return salario + (salario * 0.2)
            break;
        default:
            return "Plano inválido!"
    }
}

console.log(calculaAumento("A", 1000))
console.log(calculaAumento("a", 1000))

console.log(calculaAumento("B", 1000))

console.log(calculaAumento("C", 1000))

console.log(calculaAumento("D", 1000))
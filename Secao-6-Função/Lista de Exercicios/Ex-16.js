/*
Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação 
e a realize com os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). 
A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.
Crie um caso default para operações inválidas.
*/

function calculadora(a, operador, b) {
    switch(operador) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "x":
            return "Caminhonete Dodge RAM Traçada BRUTA DEMAIS!";
            break;
        case "*":
            return a * b;
            break;
        case "/":
            return a / b;
            break;
        default:
            return "operação inválida";
            break;
    }
}

console.log(calculadora(4,"+",4))
console.log(calculadora(4,"-",4))
console.log(calculadora(4,"*",4))
console.log(calculadora(4,"/",4))
console.log(calculadora(4,"x",4))

/*
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles.
Porém, não utilize o operador de multiplicação. Exemplo
*/

function multiplicar(num1, num2) {
    if (num1 >= 0 && num2 >= 0) {
        resultado = 0;

        for (let i = 0; i < num2; i++) {
            resultado += num1
        }

        return resultado
    } else return "os números precisam ser maior ou igual a 0";
}

console.log(multiplicar(6, 6))

// resolução 2 -> quem inventou esse algorítmo não é normal 
function multiplicacao2(numero, multiplicador) {
    if (numero === 0 || multiplicador === 0) return 0;

    return multiplicador === 1 ? numero : numero + multiplicacao2(numero, multiplicador-1)
}

console.log(multiplicacao2(6, 3))

// resolução 3
function multiplicar3(numeroA, numeroB) {
    if (numeroA === 0 || numeroB === 0) return 0;

    const maiorNumero = Math.max(numeroA, numeroB); // retorna o maior número entre os dois passados
    const menorNumero = Math.min(numeroA, numeroB); // retorna o menor número entre os dois passados

    function multiplicarRecursivamente(numero, multiplicador) {
        return (
            multiplicador === 1 ?
            // se multiplicador for igual a 1, ou tiver chegado ao valor 1, o retorno é 'numero'
            numero : 
            // senão, continua chamando multiplicarRecursivamente() passando o 'numero', reduzindo -1 em 'multiplicador' e soma com 'numero' ,
            // ou seja, faz a soma atualizando o valor de 'numero' somando cada chamada de multiplicarRecursivamente()
            // e o 'multiplicador' serve como contador de quantas vezes a função será chamada novamente até chegar a 1
            multiplicarRecursivamente(numero, multiplicador-1) + numero 
        )
    }
    // nessa versão, garantimos que o multiplicador será o menor número, portanto haverá o mínimo de chamadas recursivas
    return multiplicarRecursivamente(maiorNumero, menorNumero)
}

console.log(multiplicar3(5, 5))
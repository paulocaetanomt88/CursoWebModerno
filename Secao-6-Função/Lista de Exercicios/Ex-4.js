/*
Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

function divisaoComResto(dividendo, divisor) {
    let resultado = dividendo / divisor;
    let resto = dividendo % divisor;

    return { resultado, resto}
}

console.log(divisaoComResto(10, 3))
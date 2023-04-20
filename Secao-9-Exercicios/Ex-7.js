/*
Crie uma função que receba quatro números como parâmetro (número, mínimo, máximo, inclusivo) e retorne se o parâmetro numero (primeiro)
está entre mínimo e máximo. Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se número é igual
a mínimo ou a máximo. Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva,
não considerando se número é igual a mínimo ou a máximo.
*/
function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if (inclusivo) {
        if (numero >= minimo && numero <= maximo) return true
        else return false
    } else {
        if (numero > minimo && numero < maximo) return true
        else return false
    }
}

console.log(estaEntre(60, 50, 100)) // 60 está entre 50 e 100, entao é true
console.log(estaEntre(40, 50, 100)) // 40 não está, então é false
console.log(estaEntre(50, 50, 100)) // inclusivo por padrão é false, se não for passado como true, então  50 não está, retorna false
console.log(estaEntre(50, 50, 100, true)) // inclusivo foi passado como true, então 50 está pois conta incluindo o mínimo e o máximo, retorna true
console.log(estaEntre(100, 50, 100, true)) // inclusivo foi passado como true, então 100 está pois conta incluindo o mínimo e o máximo, retorna true

// enxugando o código
function estaEntre2(numero, minimo, maximo, inclusivo = false) {
    if (inclusivo) return numero >= minimo && numero <= maximo;
    
    return numero > minimo && numero < maximo
}

console.log(estaEntre(50, 50, 100))
console.log(estaEntre(50, 50, 100, true))
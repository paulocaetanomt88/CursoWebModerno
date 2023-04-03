/*
Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/

function potencia(base, expoente) {
    return Math.pow(base, expoente)

    //Método novo:
    // return (base ** expoente)
}

console.log('Potenciação de '+3+' elevado a '+2+' = '+ potencia(3, 2))
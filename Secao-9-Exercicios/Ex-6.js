/*
    Escreva uma função que receba um valor booleano ou numérico. Se o parãmetro fornecido for booleano, o retorno deverá ser o inverso.
    Por exemplo, se a entrada for false, retornará true.
    Se o parâmetro for numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1.
    Se o parâmetro de entrada não for de nenhum dos dois tipos acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ..."
*/

function inverso(parametro) {
    if (typeof parametro == 'boolean') return !parametro
    else if(typeof parametro == 'number') return parametro * -1;
    else return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof parametro}`
}

console.log(inverso(5))
console.log(inverso(false))
console.log(inverso('Texto'))

// resolução 2
function inverso2(parametro) {
    const tipo = typeof parametro // pega o tipo 1 vez

    // fazendo os testes
    if (tipo == 'boolean') return !parametro
    else if(tipo == 'number') return -parametro
    else 
        return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
}

console.log(inverso2(5))
console.log(inverso2(false))
console.log(inverso2('Texto'))
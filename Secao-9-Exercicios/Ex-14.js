/*
Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada elemento é um array formado
pelos pares chave/valor que corresponde a um atributo do objeto. Exemplos:
objetoParaArray({
    nome: 'Maria',
    profissao: 'programadora
}) // irá retornar [["nome", "Maria"], ["profissao", "programadora"]]

objetoParaArray({
    codigo: 1111,
    preco: 12000
}) // irá retornar [["codigo", "1111"], ["preco":"12000"]]
*/

function objetoParaArray(objeto) {
    const resultado = []

    for (let chave in objeto) {
        resultado.push([chave, objeto[chave]])
    }

    return resultado
}

console.log(objetoParaArray({
    codigo: 1111,
    preco: 12000
}))
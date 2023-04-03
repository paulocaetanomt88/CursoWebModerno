let variavel // não inicializada, sem valor
console.log(variavel) // undefined, ou seja, seu valor é indefinido

// tentando imprimir uma variavel que não foi nem declarada ainda
// console.log(variavel2) // saída: "ReferenceError: variavel2 is not defined" ou seja, a variável não foi definida (erro comum em falha de digitação)

let valorNulo = null // ausência de valor, atribuir o valor null serve também para zerar o valor de uma variável
console.log(valorNulo)

const produto = {}

// tentando acessar uma chave não existente do objeto contido em produto
console.log(produto.preco) // saída: undefined

// tentando acessar uma chave inexistente de outra chave inexistente dentro de produto
// console.log(produto.preco.a) // saída: erro de tipo: impossível ler propriedade de uma chave indefinida

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // evitar atribuir undefined
console.log(produto) // retorna o produto { preco: undefined }
// delete produto.preco // preferencialmente usar o delete se quiser deletar uma propriedade de um objeto 

// testando o retorno booleano de produto.preco
console.log(!!produto.preco) // undefined retorna false

produto.preco = null // zera o valor de preco
console.log(!!produto.preco) // null retorna false
// Object.preventExtensions previne que um objeto seja estendido, não permite que seja adicionados novos atributos
// mas não impede que atributos sejam deletados
// Exemplo:
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível: '+ Object.isExtensible(produto))

produto.nome = 'Borracha' // sobrescrevendo o atributo nome
produto.descricao = 'Borracha escolar branca' // este atributo não será adicionado
delete produto.tag  // deletando o atributo tag
console.log(produto)

// Object.seal() sela um objeto de forma que não se pode adicionar e nem remover seus atributos
const pessoa = { nome: 'Juliana', idade: 35 } // criando um objeto com nome e idade
Object.seal(pessoa) // selando o objeto pessoa
console.log('Selado: ', Object.isSealed(pessoa)) // -> true

pessoa.sobrenome = 'Silva' // tentando mas não vai alterar o nome
delete pessoa.nome // tentando mas não vai deletar o atributo nome
pessoa.idade = 29
console.log(pessoa)

Object.freeze(pessoa) // Object.freeze = selado + valores constantes = inalterável
pessoa.idade = 31 // não consegue alterar o valor de idade porque o objeto está congelado

console.log(pessoa)
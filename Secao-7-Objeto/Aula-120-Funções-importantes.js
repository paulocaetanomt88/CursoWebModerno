const pessoa = {
    nome: 'Rebeca',
    idade: 21,
    peso: 59
}

console.log(Object.keys(pessoa)) // Object.keys() retorna um array com as chaves dos atributos do objeto 
console.log(Object.values(pessoa)) // Object.values() retorna um array com os valores dos atributos do objeto
console.log(Object.entries(pessoa)) // Object.entries() retorna um array com arrays que possuem dois elementos para cada atributo do objeto, onde o índice [0] é a chave e o índice [1] é o valor

// percorrendo os arrays que contém os atributos (chave e valor) do objeto com foreach
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// Definindo uma propriedade de um objeto com Object.defineProperty()
/*
    1º parâmetro é o objeto que vai receber a nova propriedade
    2º parâmetro é a chave (nome) da propriedade
    3º parâmetro é um objeto contendo a configuração dessa propriedade (enumerável? pode ser alterada? valor?)
*/
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2002'
})

pessoa.dataNascimento = '01/01/2003' // não alterou porque writable está como false
console.log(pessoa.dataNascimento)

// Object.assign (ECMAScript 2015)
const destino = { a: 1 }
const obj1 = { b: 2 }
const obj2 = { c: 3, a: 5}
const objeto = Object.assign(destino, obj1, obj2) // junta os objetos recebidos no objeto destino

Object.freeze(objeto) // congelando o obeto apenas para praticar

objeto.c = 123

console.log(objeto)
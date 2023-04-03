let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)
// console.log(!!isAtivo)

console.log('Os números que retornam verdadeiro: ')
// todos os números inteiros positivos ou negativos com exceção do 0
console.log(!!3)
console.log(!!-1)
console.log(!!' ') // espaço em branco
console.log(!![]) // array vazio
console.log(!!{}) // objeto vazio
console.log(!!Infinity)
console.log(!!(isAtivo = Infinity))

console.log('Os números que retornam falso: ')
console.log(!!0) // zero
console.log(!!'') // texto vazio retorna false, é diferente de espaço em branco
console.log(!!null) // tipo nulo
console.log(!!NaN) // Not a Number
console.log(!!undefined) // váriavel ou retorno indefinido
console.log(!!(isAtivo = false))

console.log('Pra finalizar, testar os valores e retornar apenas o que for verdadeiro: ')
console.log(('' || null || 0 || 'epa'))

let nome = 'Paulo'
console.log(nome || 'Desconhecido')
/*
O contexto de execução (runtime) pode gerar diferenças no resultado de uma função, processamento, retorno, etc

Browser (navegador) x Node (servidor)

No browser vai estar trabalhando muitas vezes com operações ASSÍNCRONAS para chamar algo no backend e saber que tem um callback
Uma variável declarada com 'var' exemplo 'var a' foi declarada como variável global e está em escopo global no contexto window 
e pode ser sobrescrita em qualquer escopo

Outra variável declarada com 'let' exemplo 'let b' foi declarada como variável global porém não está em escopo global no contexto window
e não pode ser sobrescrita no mesmo escopo

Uma boa prática é fugir do escopo global na criação de variáveis
se necessário usar escopo global, usar constante 'const' é uma melhor saída

this dentro de um arquivo é o module.exports
*/

// variável criada com let fica local dentro desse arquivo e não é exportada e não fica no global
let a = 4

// criando uma variavel maluca sem var ou let!
abc = 3 // isso cria uma variavel diretamente global no node | não fazer isso! |

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(this.a)

console.log(global.b)
console.log(b)

console.log(this.c)

console.log(module.exports.c)

console.log(this === module.exports)

console.log( module.exports.d)
console.log( module.exports.e)

console.log( module.exports)
// Função em JS é First-Class Object (citizens)
// Higher-order function
// se não for especificado o return, uma função sempre retornará undefined

// Podemos criar funções de várias formas:

// Forma Literal (dando nome à função):
function fun1(par1, par2, par3, etc) 
{
    // ...
} 

// Armazenar em uma variável
const fun2 = function() {}



// armazenar em um array
const array = ["elemento1",function elemento2(param1, param2) {
    return param1 + param2
}, "elemento3"]

console.log(array[1](3, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() { return 'Aôwa!' }
console.log(obj.falar())

// Passar função como parâmetro
function run(funcao) {
    funcao()
}
run(function() { console.log('Executando...') })

// uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2,3)
cincoMais(4)
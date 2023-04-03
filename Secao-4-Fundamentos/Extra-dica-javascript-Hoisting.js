/* 
// Exemplo 1
var a = 2 // escopo global fora da função

console.log(a)

function qualquer() {
    
    console.log(a) // aqui a variavel a = undefined pelo escopo local de função
    
    var a = 3 // declaração da variável com valor default 3

    console.log(a) // imprime o valor da variavel : 3
}

qualquer() // chamando a função
*/

/*
// Exemplo 2
function getValor() {
    function retornarValor() {
        return 1
    }

    return retornarValor()

    // a segunda declaração de retornarValor sobrescreve a primeira alterando o seu valor de retorno
    function retornarValor() {
        return 2
    }
}

var resultado = getValor()
console.log(resultado)
*/

// Exemplo 3
function getValor() {
    var retornarValor = function() {
        return 1
    }

    return retornarValor()

    function retornarValor() {
        return 2
    }

    
}
var resultado = getValor()
console.log(resultado);
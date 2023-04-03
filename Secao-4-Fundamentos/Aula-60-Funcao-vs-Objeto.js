console.log(typeof Object) // -> classe Object (pré existente do javascript) é do tipo function
console.log(typeof new Object()) // instância da classe é do tipo ->object

const Cliente = function() {}
console.log(typeof Cliente) // -> function o próprio nome já diz
console.log(typeof new Cliente) // -> instância de uma function com operador new é do tipo object

class Produto {} // ES 2015 (ES6) - criando uma classe chamada Produto
console.log(typeof Produto) // -> classe é do tipo function 
console.log(typeof new Produto()) // instância de classe é do tipo object
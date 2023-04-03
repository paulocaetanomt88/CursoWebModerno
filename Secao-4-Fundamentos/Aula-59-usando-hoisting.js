// tentando imprimir a variavel 'a' antes de ser declarada 
console.log('a = '+ a) // em javascript não gera erro porque acontece o hoisting, ou seja, a instância da variável é "jogada pra cima"

var a   // somente agora declarando a variável
 a = 2 // a atribuição de valor acontece somente nessa linha
 
 console.log('a = '+ a) // aqui já é possível imprimir a variável com o valor contido
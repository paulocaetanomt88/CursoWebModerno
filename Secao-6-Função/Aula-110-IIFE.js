// IIFE - Immediately Invoked Function Expression
// Função Auto Invocada
// é uma função criada, mesmo sendo anônima, que na hora da declaração já chama esta função
// uma das utilidades de uma função auto invocada é fugir do escopo global, e tudo que for dessa função vai ser apenas escopo local dessa função
// justificativa: se algo é compartilhado por toda a aplicação, principalmente se for variável, muitas pessoas ou códigos podem manipular esta variavel e pode gerar bugs inesperados

// criar a função dentro de parênteses e colocar outro par de parênteses fora
(function() {
    console.log("Será executado automaticamente!")
    console.log("Todas as variáveis e constantes criadas nessa função ficará disponível apenas no escopo dessa função")
    var teste = "vai imprimir fora?"
})()

console.log(teste) // --> ReferenceError: teste is not defined
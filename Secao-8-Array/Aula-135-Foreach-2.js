// simulando o forEach()
// vamos criar dentro da prototype de Array porque essa função ainda não existe
// a função forEach2() recebe como parâmetro uma função callback que vai ser chamada
// quando forEach2 for invocada
// O laço for() { ... } vai percorrer o array, começando do índice 0, 
// e executa enquanto indice for menor que this.length (que aponta para o tamanho do array)
// this é o próprio array
// dentro do {...} for vamos chamar a função callback passando 3 parâmetros:
// 1º é o valor do elemento atual, 2º é o índice e o 3º é o array completo
// a função vai ser chamada, o bloco de comandos da função vai ser executado e ao fim passa pra próxima interação de for()
Array.prototype.forEach2 = function(funcao_callback) {
    for (let i = 0; i < this.length; i++) { 
        funcao_callback(this[i], i, this)
    }
}

const aprovados = ['José', 'Maria', 'João', 'Genésia']

aprovados.forEach2(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})
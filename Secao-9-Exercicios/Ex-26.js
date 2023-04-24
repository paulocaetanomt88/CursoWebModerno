/*
Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes, ou seja, sem as vogais:
*/
function removerVogais(frase) {
    // criando uma variável constante apenas para comparação
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    // .forEach() percorre cada elemento de vogais
    // vogal fica sendo uma variável temporária apenas para uso do forEach para representar cada elemento de vogais
    // no corpo da função callback, estamos operando direto na variável frase (recebida como parâmetro),
    // substituindo o seu valor original pelo retorno do .replace() que substitui as ocorrencias de vogal por um espaço em branco
    vogais.forEach(vogal => frase = frase.replace(vogal, ''))

    return frase
}

//console.log(removerVogais("Rambo was a good dog.")) // funciona apenas para a primeira palavra da frase

// resolução 2
function removerVogais2(frase) {
    return frase.replace(/[aeiou]/ig, '')
}

console.log(removerVogais2("Paralepipedo piau proa.")) // (Usando regex) funciona para a frase inteira

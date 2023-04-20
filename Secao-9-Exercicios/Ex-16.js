/*
A fim d emanter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos bissextos, que têm 366 dias
Para determinar se um ano é bissexto, é necessário saber se ele é múltiplo de 4. Não pode ser mútiplo de 100,
exceto se for também múltiplo de 400
com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é bissexto ou não
*/

function verificaAnoBissexto(ano) {
    if (ano % 100 == 0 && ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false;
    } else if (ano % 4 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaAnoBissexto(2400))
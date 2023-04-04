/*
Escreva um algoritmo que leia o código de um aluno e suas três notas. 
Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3.
Mostre o código do aluno, suas três notas, a média calculada e uma mensagem 
"APROVADO" se a média for maior ou igual a 5 
e "REPROVADO" se a média for menor que 5.
Repita a operação até que o código lido seja negativo.
*/

function calculaMediaPonderada(codigo, nota1=0, nota2=0, nota3=0) {
    if (codigo >= 0) {
        let media_ponderada = 0;
        let nota_maior = 0;
        let notas_menores = [];
        let mensagem = "";

        if(nota1 > nota2 && nota1 > nota3) {
            nota_maior = nota1;
            notas_menores.push(nota2, nota3);
        } else if(nota2 > nota1 && nota2> nota3) {
            nota_maior = nota2;
            notas_menores.push(nota1, nota3);
        } else {
            nota_maior = nota3;
            notas_menores.push(nota2, nota1);
        }

        media_ponderada = ((nota_maior * 4) + (notas_menores[0] * 3) + (notas_menores[1] * 3)) / (4 + 3 + 3);

        mensagem += `Código do aluno: ${codigo} \nNotas: ${nota_maior}, ${notas_menores[0]}, ${notas_menores[1]} \nMédia: ${media_ponderada} \nSituação: ${media_ponderada < 5 ? 'Reprovado' : 'Aprovado'}`;

        return mensagem;
    } else {
        return "Código negativo fecha a função";
    }
}

console.log(calculaMediaPonderada(123, 5, 8, 7))
console.log(calculaMediaPonderada(123, 2.8, 6, 3.5))
console.log(calculaMediaPonderada(-123, 2.8, 6, 3.5))
console.log(calculaMediaPonderada(321))
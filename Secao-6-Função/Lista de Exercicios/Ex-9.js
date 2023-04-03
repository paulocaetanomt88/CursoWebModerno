/*
Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
*/

let multiplosDe5 = [];

for(i=1; i<=100; i++) {
    
    if(i % 5 == 0) {
        multiplosDe5.push(i)
    }
}

console.log(multiplosDe5)

function classificacao(nota) {
    if(nota>=0 && nota<=100){
        let multiploProximo = 0
        let multiploAnterior = 0
        let maisProximo = 0

        if(nota>=38) {
            for(i=0; i<multiplosDe5.length; i++) {
                if(nota+2>=multiplosDe5[i] && nota-2<=multiplosDe5[i]){
                    nota = multiplosDe5[i]
                }
            }
        }
        
        if(nota < 40 ) {
            return "Reprovado com nota "+nota;
        } else {
            return "Aprovado com nota "+nota;
        }
    } else {
        return "Nota inválida para classificação."
    }
}

console.log(classificacao(29))
console.log(classificacao(36))
console.log(classificacao(37))
console.log(classificacao(38))
console.log(classificacao(41))
console.log(classificacao(42))
console.log(classificacao(43))
console.log(classificacao(44))
console.log(classificacao(84))
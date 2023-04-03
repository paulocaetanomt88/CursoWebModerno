/*
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function classificaTriangulo(a, b, c) {
    // verificando se as medidas formam um triângulo
    if((a >= (b+c)) || (b >= (c+a)) || (c > (b+a))) {
        return "Nâo é um triângulo!"
    } else {
        if (a == b && a == c) {
            return "Triângulo equilátero!"
        } else if ((a == b && b != c) || (a == c && c != b)) {
            return "Triângulo isósceles!"
        } else if (a != b && a != c && c != b) {
            return "Triângulo escaleno!"
        }
    }
}

console.log(classificaTriangulo(10, 10, 10)) // três lados iguais
console.log(classificaTriangulo(10, 10, 15)) // dois lados iguais e um diferente (mas um lado não é maior/igual que a soma dos outros dois)
console.log(classificaTriangulo(10, 11, 12)) // três lados diferentes (mas um lado não é maior/igual que a soma dos outros dois)

console.log(classificaTriangulo(10, 20, 10)) // um lado aqui é igual a soma dos outros dois
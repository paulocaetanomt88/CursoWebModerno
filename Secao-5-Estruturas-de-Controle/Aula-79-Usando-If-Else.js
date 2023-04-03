const imprimeResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimeResultado(10)
imprimeResultado(6.5)
imprimeResultado('7 tenta')
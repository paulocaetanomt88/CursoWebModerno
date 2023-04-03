const imprimeResultado = function(nota) {
    // Math.floor arredonda pra baixo
    switch(Math.floor(nota)) { 
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break;
        case 8: case 7:
            console.log('Aprovado')
            break;
        case 6: case 5: case 4:
            console.log('Recuperação')
            break;
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break;
        default:
            console.log('Nota inválida!')
    }
}

imprimeResultado(10)
imprimeResultado(8.9)
imprimeResultado(6.55)
imprimeResultado(2.3)

imprimeResultado(-1)
imprimeResultado(12)
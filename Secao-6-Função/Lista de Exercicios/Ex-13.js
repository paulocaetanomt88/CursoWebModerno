/*
Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function validaDia(dia) {
    let retorno =""
    switch(dia) {
        case 1:
            retorno = "Fim de semana";
            break
        case 2:
            retorno = "Dia útil";
            break
        case 3:
            retorno = "Dia útil";
            break
        case 4:
            retorno = "Dia útil";
            break
        case 5:
            retorno = "Dia útil";
            break
        case 6:
            retorno = "Dia útil";
            break
        case 7:
            retorno = "Fim de semana";
            break
        default: 
            retorno = "Dia inválido"
            break
    }

    return retorno;
}

console.log(validaDia(2))

/* 
for (i=1; i<=8; i++){
    console.log(diaValido(i))
} 
*/
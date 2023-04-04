/*
Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

function verificaPalavras(palavra1, palavra2) {
    let estaContido = true

    for (let i=0; i<palavra1.length; i++) {
        let caracterePalavra1 = palavra1.charAt(i).toLowerCase()

        for (let j=0; j<palavra2.length; j++) {
            let caracterePalavra2 = palavra2.charAt(j).toLowerCase()

            if(caracterePalavra1 == caracterePalavra2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }

        if(!estaContido) {
            return estaContido;
        }
    }
    for (let i=0; i<palavra2.length; i++) {
        let caracterePalavra2 = palavra2.charAt(i).toLowerCase()

        for (let j=0; j<palavra1.length; j++) {
            let caracterePalavra1 = palavra1.charAt(j).toLowerCase()

            if(caracterePalavra1 == caracterePalavra2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }

        if(!estaContido) {
            return estaContido;
        }
    }
    return estaContido;
}

// todos os caracteres de palavra2 estão contidos na palavra1 mas os caracteres da palavra1 não estão contidos na palavra2 -> retorna false
console.log(verificaPalavras('abcdf', 'dcba'))

// todos os caracteres das duas palavras estão contidos em ambas -> retorna true
console.log(verificaPalavras('abcdf', 'dcbaf'))
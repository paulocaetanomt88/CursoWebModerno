function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeImprime(valor) {
    if(valor) console.log('O valor é verdadeiro: ' + valor)
}

seForVerdadeImprime() // vazio resolve pra false
seForVerdadeImprime(null) // null resolve pra false
seForVerdadeImprime(undefined) // undefined resolve pra false
seForVerdadeImprime(NaN) // Not a Number resolve pra false
seForVerdadeImprime('') // texto vazio resolve pra false
seForVerdadeImprime(0) // zero resolve pra false

seForVerdadeImprime(-1) // valor inteiro diferente de 0 resolve pra true
seForVerdadeImprime(' ') // espaço em branco resolve pra true
seForVerdadeImprime('?') // string resolve pra true
seForVerdadeImprime([]) // array vazio resolve pra true
seForVerdadeImprime([1, 2]) // array com elementos resolve pra true
seForVerdadeImprime({}) // objeto resolve pra true
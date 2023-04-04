/*
Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function quantasNotas(valor) {
    let notasDe100 = 0;
    let notasDe50 = 0;
    let notasDe20 = 0;
    let notasDe10 = 0;
    let notasDe5 = 0;
    let notasDe2 = 0;

    let stringDeRetorno = ""

    if( valor >= 2) {
        if(valor >= 100) {
            notasDe100 = Math.trunc(valor/100)
            stringDeRetorno += notasDe100 + " nota(s) de R$ 100. "

            valor -= (notasDe100 * 100) // atualiza valor
        } 
        
        if(valor >=50 ) {
            notasDe50 = Math.trunc(valor/50)
            stringDeRetorno += notasDe50 + " nota(s) de R$ 50. "

            valor -= notasDe50 * 50
        } 
        
        if(valor >=20 ) {
            notasDe20 = Math.trunc(valor/20)
            stringDeRetorno += notasDe20 + " nota(s) de R$ 20. "

            valor -= notasDe20 * 20
        } 
        if(valor >=10 ) {
            notasDe10 = Math.trunc(valor/10)
            stringDeRetorno += notasDe10 + " nota(s) de R$ 10. "

            valor -= notasDe10 * 10
        } 
        if(valor >=5 ) {
            notasDe5 = Math.trunc(valor/5)
            stringDeRetorno += notasDe5 + " nota(s) de R$ 5. "

            valor -= notasDe5 * 5
        } 
        if(valor >=2 ) {
            notasDe2 = Math.trunc(valor/2)
            stringDeRetorno += notasDe2 + " nota(s) de R$ 2. "

            valor -= notasDe2 * 2
        }
        
        return stringDeRetorno + " e " + valor + " em moedas."
    } else {
        return "Nâo tenho notas disponíveis para este valor"
    }
}

console.log(quantasNotas(253))
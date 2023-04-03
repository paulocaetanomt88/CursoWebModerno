function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2   // operação do tipo "esse OU esse" é verdadeiro?
    const comprarTv50 = trabalho1 && trabalho2 // operação que verifica se os dois valores comparados são verdadeiros
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // operação que verifica se "essse é DIFERENTE desse"
    const manterSaudavel = !comprarSorvete // operador unário que inverte o valor, se é false passa a ser verdadeiro e vice-versa

    // função em javascript permite apeanas um retorno,
    // mas para retornar vários valores no mesmo retorno podemos retornar as constantes em um único objeto
    // (que fica sendo único retorno)
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} 
    // quando se omite a chave do par chave-valor, o nome da constante ou variável passa a ser o nome da chave,
    // e o valor é o próprio valor contido nesta
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
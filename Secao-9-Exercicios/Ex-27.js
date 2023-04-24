/*
Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao objeto recebido,
porém com as posições das chaves e valores invertidas, conforme exemplo a seguir:
inverter({ a: 1, b: 2, c: 3 }) // retornará { 1: 'a', 2: 'b', 3: 'c' } 
*/
                    // recebe um objeto
function inverter(objeto) {
    const objetoInvertido = {} // cria outro objeto (vazio)

    Object.entries(objeto).forEach(parChaveValor => { // percorrendo os atributos do objeto, use parChaveValor como variável temporária para cada atributo
        // os atributos de um objeto em javascript também podem ser acessados da mesma forma que se acessa um elemento de vetor, através de seus índices começando em 0, 1, 2 ...
        objetoInvertido[ parChaveValor[1] ] = parChaveValor[0]
    })

    return objetoInvertido
}

console.log(inverter({ a: 1, b: 2, c: 3 }))

// Resolução 2
function inverter2(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto).map(parChaveValor => parChaveValor.reverse())

    return Object.fromEntries(paresDeChaveValorInvertidos)
}
console.log(inverter2({ a: 1, b: 2, c: 3 }))
// Closure é o escopo criado quando uma função é declarada
// esse escopo érmite a função acessar e manipular variáveis externas à função

// exemplo prático
const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }

    return dentro()
}

console.log(fora())

const minhaFuncao = fora()
console.log(minhaFuncao)
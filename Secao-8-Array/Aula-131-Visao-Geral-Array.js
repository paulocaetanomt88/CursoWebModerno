// Um array em javascript é um objeto.
// Tem características próprias mas não é do tipo de dados array como em outras linguagens.
// typeof de Array é uma função
// typeof de uma nova instância (new Array) é um objeto, da mesma forma ocorre com a notação de array literal []

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') // criando um array com o new Array()
console.log(aprovados)

aprovados = ['José', 'João', 'Maria'] // sobrescrevendo aprovados com um array criado com a notação literal []
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // indíce 3 ainda não existe entao vai imprimir undefined

aprovados[3] = 'Paulo' // definindo o índice 3 com o texto 'Paulo'
aprovados.push('Abia') // adicionando um elemento depois do último índice com o texto 'Abia'
console.log(aprovados.length)

aprovados[9] = 'Rafael' // definindo que no índice 9 vai conter um elemento com o texto 'Rafael'
// * Obs: todos os índices entre 4 e 9, ou seja 5, 6, 7 e 8 existem porém com valor undefined
console.log(aprovados.length)
console.log(aprovados[6])
console.log(aprovados[8] === undefined) // -> true

console.log(aprovados)
aprovados.sort() // ordenou os elementos em ordem alfabética
console.log(aprovados)

delete aprovados[1] // deletando o elemento de índice 1
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento adicionado 1', 'Elemento adicionado 2', 'Elemento adicionado 3')
/* entendendo o método .splice() de um array
    splice(
        1º parâmetro, -> índice que será aplicado alterações, mas antes desse índice permanece inalterado, os posteriores serão jogados pro final
                            (se não informado, removerá todos os valores do index início até o final da array)
        2º parâmetro, -> quantos índices serão excluídos (2)
        3º parâmetro em diante -> índices que serão adicionados no lugar dos removidos
    )
*/
console.log(aprovados)
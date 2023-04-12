const nums = [1, 2, 3, 4, 5]

// o .map() recebe uma função callback que vai fazer o processamento em cada elemento 
// mapeia um array para um outro array com o mesmo tamanho e com seus elementos modificados
let resultado = nums.map(function(e) {
    return e * 2
})
console.log(resultado)

// aplicando map() sobre map() para cada elemento
const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
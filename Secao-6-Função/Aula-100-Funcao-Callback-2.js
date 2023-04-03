// DIFERENÇAS ENTRE USAR E NÃO USAR CALLBACK 

const notas = [6.5, 7.8, 8.5, 4.5, 9.0, 7, 5.7]

// Sem callback
const notasBaixas1 = []

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com callback
// * todo array em javascript possui por padrão uma função .filter(callback)
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 6
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 5)
console.log(notasBaixas3)
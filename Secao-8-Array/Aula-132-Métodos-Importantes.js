const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // elimina o último elemento do array 'Massa'
pilotos.push('Verstappen') // adiciona o elemento 'Verstappen' após o último elemento
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
pilotos.unshift('Hamilton') // adiciona o elemento 'Hamilton' no ínicio do array
console.log(pilotos)

// splice pode adicionar e remover elementos
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // no índice 2, remova 0 elementos, adicione 'Bottas', 'Massa'
console.log(pilotos)

//remover
pilotos.slice(3, 1) // a partir do índice 3 remova 1 elemento -> 'Massa'
console.log(pilotos)


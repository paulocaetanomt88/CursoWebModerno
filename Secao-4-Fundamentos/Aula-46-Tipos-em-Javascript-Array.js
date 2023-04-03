const valores = [7.7, 8.9, 6.3, 9.2] // array com 4 posições, começando com índice 0
console.log(valores[0], valores[3]) // acessando valores dos índices 0 e 3
console.log(valores[4]) // índice 4 não existe, então retorna undefined

// adicionando um elemtno a 'valores' que vai ocupar o índice 4
valores[4] = 10
console.log(valores)

console.log(valores.length) // imprimindo a quantidade de elementos de 'valores'

// adicionando elementos de tipos diferentes ao mesmo vetor 'valores'
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // remove o último elemento do array
delete valores[0] // remove um elemento de índice específico
console.log(valores)
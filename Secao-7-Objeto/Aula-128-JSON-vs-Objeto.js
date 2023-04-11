// criando um objeto com atributos e funções
const obj = { a: 1, b: 2, c: 3, soma() { return a+b+c } }

// convertendo o objeto para JSON vai considerar os atributos e excluir a função no JSON gerado
console.log(JSON.stringify(obj))


// Convertendo JSON para objeto
// console.log(JSON.parse("{ a: 1, b: 2, c: 3}"))  // formato inválido
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}"))  // formato inválido
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) // formato VÁLIDO
console.log(JSON.parse('{ "a": 1.8, "b": "Turbo Aspirado", "c": true, "d": {}, "e": [] }')) // formato VÁLIDO
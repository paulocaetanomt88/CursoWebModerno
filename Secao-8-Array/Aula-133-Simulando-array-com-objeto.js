const objeto = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(objeto)

Object.defineProperty(objeto, 'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(objeto[0])

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(objeto.toString(), meuArray)
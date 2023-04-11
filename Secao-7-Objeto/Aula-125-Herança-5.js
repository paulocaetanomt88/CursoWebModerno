// os 3 tipos são do tipo function, portanto possuem o atributo .prototype
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// Adicionar novas funções e atributos dentro de um determinado protótipo
// reverter uma string
String.prototype.reverse = function () {
    // .split('') separa todos os caracteres incluindo espaços e transforma em um array
    // o array possui a função .reverse() que inverte as posições dos elementos
    // .join() faz a junção dos caracteres transformando em uma string
    return this.split('').reverse().join('')
}

console.log('Paulo Caetano'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5, 6].first())
console.log(['A', 'B', 'C', 'D', 'E', 'F'].first())

/*
Tomar muito cuidado ou EVITAR substituir funções que já existem no prototype, por exemplo da String
*/
// .toString já existe
String.prototype.toString = function() {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())
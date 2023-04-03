// função anônima 
let dobro = function (a) {
    return 2 * a
}

// arrow function
dobro = (a) => {
    return 2 * a
}

// arrow function com apenas um parâmetro não precisa de parênteses
dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

// arrow function de forma reduzida sem parâmetro e com return implícito
ola = () => 'Olá'
ola = _ => 'Olá' 

console.log(ola())
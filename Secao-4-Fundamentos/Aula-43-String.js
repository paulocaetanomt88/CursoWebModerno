const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('C'));
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('EScola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))

let stringDeNomes = 'Ana,Maria,Pedro';
let arrayDeNomes = stringDeNomes.split(',');

console.log(arrayDeNomes);
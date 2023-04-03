let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

// sinal ++ ou -- antes da variável faz alteração antes da comparação 
// e depois da variável faz a alteração depois da comparação, ou seja, no exato momento da comparação ainda permanece o valor antigo
console.log(++num1 == num2--)

// foi feita alteração em num2-- após a comparação, então aqui já não são mais iguais
console.log(num1 === num2)
console.log(num1, num2)
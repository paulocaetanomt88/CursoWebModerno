// simulando um for com while
let contador = 1
while(contador <= 10)
{
    console.log(`contador = ${contador}`)
    contador++
}

// Usando o for controlando a quantidade de repetições com i (contador)
for(let i = 1; i <= 10; i++)
{
    console.log(`i = ${i}`)
}

// Percorrendo um array com for
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) 
{
    console.log(`nota = ${notas[i]}`)
}
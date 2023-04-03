// percorrendo array de notas
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (i in notas)
{
    console.log(i, notas[i])
}

// criando objeto carro com atributos
const carro = { 
    modelo: 'Gol',
    ano: 2020,
    portas: 5,
    cor: 'cinza',
    motor: '1.6'
}
// percorrendo atributos do objeto carro
for (atributo in carro)
{
    console.log(`${atributo} = ${carro[atributo]}`)
}
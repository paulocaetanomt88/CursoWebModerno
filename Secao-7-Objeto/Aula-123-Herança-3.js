const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) // criando o objeto filha1 que herda atributos do pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})
console.log(filha2.nome)
filha2.nome = 'Carla' // não vai alterar porque writable está como false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) //-> nome continua sendo Bia

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?  // retorna true se a key percorrida pertence ao objeto ou false se recebeu do protótipo por herança
        console.log(key) : console.log(`Por herança: ${key}`)
}
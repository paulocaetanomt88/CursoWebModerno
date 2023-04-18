// definindo um método no prototype de Array, esta funçao fica disponível para todos os arrays
Array.prototype.filter2 = function(callback) {
    // cria um novo array
    const newArray = []

    // percorre o array do primeiro elemento (0) até o último (tamanho - 1)
    for (let i = 0; i < this.length; i++ ) {
        // teste chamando a função callback, se retornar true esse elemento será adicionado ao novo array
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        } // como não tem else, se não retornar true não faz nada
    }
    return newArray
}

// criando um array produtos que contém objetos
const produtos = [
    { nome: 'Notebook', preco: 3499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Barra de alter', preco: 15.99, fragil: false },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Anilhas 5kg', preco: 50, fragil: false },
]

const caro = parametro => parametro.preco >= 500
const fragil = parametro => parametro.fragil
const naoFragil = parametro => !parametro.fragil

console.log(produtos.filter2(caro))
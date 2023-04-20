/*
Escreva uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome de uma propriedade contida nesse objeto
Em seguida, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro
*/
let objeto1= {
    nome: 'Liquidificador',
    utilidade: 'preparar bebidas e massas',
    preco: 129.90
}

/*
Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
Copia os valores de todas as propriedades enumerable de um ou mais objetos para um objeto destino. Retorna o objeto destino.
*/
function removePropriedade(objeto, propriedade) {
    const copia = Object.assign({}, objeto)
    delete copia[propriedade]

    return copia
}

console.log(objeto1);
// 


// agora removendo a propriedade preco de uma cópia do objeto sem afetar o original
console.log(removePropriedade(objeto1, 'preco'))

console.log(objeto1);
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// Percorrendo os índices do array aprovados 
/*
    Vai ser passado uma função callback que será chamada paraCada (forEach) interação que for feita no array
    Essa função recebe dois parâmetros onde o primeiro é o próprio elemento atual e o segundo é o índice deste elemento
*/
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

// a mesma função em arrow function
aprovados.forEach((nome, indice) => console.log(`${indice + 1}) ${nome}`))

// exibindo apenas o nome
aprovados.forEach(nome => console.log(nome))
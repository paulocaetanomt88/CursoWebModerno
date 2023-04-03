// Funções Callback
// passar uma função que será chamada (de volta) quando o evento acontecer

const fabricantes = ["Mercedes", "Audi", "BMW"]

// nome: recebe o valor do elemento, ex: Mercedes
// indice: o índice de cada elemento do array, começando em 0 (por isso somou indice + 1)
// teste: receberia os três elementos do array em uma única string (não foi aplicado no retorno do console)
// outraVariavel: não aplicável, recebe undefined
function imprimir(nome, indice, teste, outraVariavel) {
    console.log(`${indice + 1}. ${nome2}`)
}

// todo array contém por padrão do javascript a função .forEach (para cada elemento ( chama de volta a função callback ))
// para cada elemento chame a função imprimir
fabricantes.forEach(imprimir)

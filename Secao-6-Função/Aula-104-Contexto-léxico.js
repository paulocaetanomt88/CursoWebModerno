const valor = 'Global' // -> contexto global do script

// por conta do contexto léxico (onde a função foi escrita) a minhaFuncao() vai encontrar a variável valor = 'Global'
function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local' // -> contexto local da função exec()
    minhaFuncao()
}

exec() // ---> Global
function tratarErroELancar(erro) {
    // throw 10
    // throw true
    // throw 'mensagem de erro'
    // throw new Error('Erro...')
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.nume.toUpperCase() + '!!!!')
    } catch(e) {
        tratarErroELancar(e)
    } finally {
        console.log('Fim do código')
    }

}

const obj = { nome: 'Paulo'}

imprimirNomeGritado(obj)
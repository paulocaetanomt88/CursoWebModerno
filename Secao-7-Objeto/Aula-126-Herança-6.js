function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 465)

console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) {
    const obj = {} // cria um objeto novo
    obj.__proto__ = f.prototype // associando o protótipo do objeto criado ao atributo prototype da função recebida por parâmetro
    f.apply(obj, params) // executa a função f passando como objeto de contexto o objeto criado e os ...params recebidos  por parâmetro

    return obj // retorna o objeto criado que é a função do operador new 
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
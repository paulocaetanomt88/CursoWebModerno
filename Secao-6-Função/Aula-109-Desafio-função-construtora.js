// Para transformar uma Classe em Função Construtora é simples
// - substituir class por function
// - mover o parâmetro do método construtor para o parâmetro da função
// - setar os atributos diretamente no corpo da função, tirando do método construtor da classe
// - o método falar() passa a ser um atributo que armazena a função 

// class Pessoa {
function Pessoa(nome) {
    /*
    constructor(nome) {
        this.nome = nome
    }
    */
    this.nome = nome // 

    /*
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
    */

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
} 

const p1 = new Pessoa('Paulo')
p1.falar()

p1.nome = "Caetano"
p1.falar()
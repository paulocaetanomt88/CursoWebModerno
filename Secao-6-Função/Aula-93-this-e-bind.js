const pessoa = {
    nome: 'Paulo',
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

// chamando o método falar() a partir da constante que o possui
pessoa.falar() 

// armazenando a função em outra constante pode gerar conflito entre paradigmas: funcional x OO
const falar = pessoa.falar 
falar()

// USANDO BIND
// o bind associado ao objeto que precisa ser resolvido  para o this
const metodoFalarDePessoa = pessoa.falar.bind(pessoa)
metodoFalarDePessoa()
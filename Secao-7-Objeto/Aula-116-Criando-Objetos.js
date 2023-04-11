// usando a notação literal
const objeto1 = {}
console.log(objeto1)

// Objeto em Javascript
console.log(typeof Object, typeof new Object)

// Funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const prod1 = new Produto('Caneta', 7.99, 0.15)
const prod2 = new Produto('Notebook', 2999.50, 0.25)
console.log(prod1.getPrecoComDesconto(), prod2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const funcao1 = criarFuncionario('João', 7980, 4)
const funcao2 = criarFuncionario('Maria', 10000, 1)
console.log(funcao1.getSalario(), funcao2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = "Maria Clara"
console.log(filha)

// Uma função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Texto em JSON"}')
console.log(fromJSON.info)
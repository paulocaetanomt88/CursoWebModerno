class Lancamento {
    /*
    Um construtor é uma função que possui uma propriedade chamada prototype, usada para permitir a herança baseada em protótipo,
    bem como o compartilhamento de propriedades. Nesse ponto o JavaScript se distingue das demais linguagens que suportam a orientação a objetos.
    O método constructor é um tipo especial de método para criar e iniciar um objeto criado pela classe.
    Além disso os atributos da classe são definidos dentro deste método.
    Só pode existir um método especial com o nome "constructor" dentro da classe.
    */
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro { 
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000) // creditando
const contaDeLuz = new Lancamento('Luz', -220) // debitando

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)

console.log(contas.sumario())
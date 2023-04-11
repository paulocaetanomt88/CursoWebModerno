const sequencia = {
    // por convenção, o _ sinaliza para outros desenvolvedores que esta variável é para ser acessada apenas dentro
    // do escopo que foi declarada, mesmo esta sendo acessível fora
    _inicio: 1, 
    get valor() { return this._inicio++ },
    set valor(valor) { 
        if (valor > this._inicio) {
            this._inicio = valor 
        }
    }
    // javascript não aceita sobrecarga de métodos a não ser no caso de get e set
}

// o javascript entende que se você está tentando acessar valor() sem parâmetros está se referindo ao método get
console.log(sequencia.valor)

// mas se estiver atribuindo um valor entende que está se referindo ao método set
sequencia.valor = 1000
console.log(sequencia.valor)

// tentando atribuir um valor menor não vai funcionar por causa da verificação do if definida dentro do método set
sequencia.valor = 900
console.log(sequencia.valor)
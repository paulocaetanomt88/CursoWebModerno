function Carro(modelo = '', velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // método público
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método público para tornar a propriedade velocidadeAtual de uma instãncia de Carro acessível fora do escopo da declaração da função
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }

    this.getVelocidadeMaxima = function () {
        return velocidadeMaxima
    }

    this.getModelo = function() {
        return modelo
    }
}



const timer = (seconds) =>  {
    let time = seconds * 1000
    return new Promise(res => setTimeout(res, time))
}

async function acelerar(veiculo) {

    console.log(veiculo.getModelo())

    while(veiculo.getVelocidadeAtual() < veiculo.getVelocidadeMaxima()) {
        veiculo.acelerar()
        console.log(veiculo.getVelocidadeAtual())
        await timer(1);
    }
}

const uno = new Carro('Uno')
const ferrari = new Carro('Ferrari', 300, 100)

acelerar(ferrari)
// acelerar(uno)
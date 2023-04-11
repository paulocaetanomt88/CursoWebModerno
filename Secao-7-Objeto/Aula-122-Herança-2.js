// Cadeia de protótipos (prototype chain)

// Definindo um atributo em Object.prototype, este atributo fica disponível para todos os objetos
Object.prototype.attr0 = '0'
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr0) // herdando de Object.prototype
console.log(filho.attr1) // herdando de avo
console.log(filho.attr2) // herdando de pai
console.log(filho.attr3) // herdando de pai mas foi sobrescrito no próprio objeto filho

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else { 
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324    // shadowing: sobrescrever um atributo no contexto do atributo do objeto filho
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` // usando o super, vai ser invocado o método status() do nível superior: pai ou avô
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(volvo.status())
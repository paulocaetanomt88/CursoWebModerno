function MeuObjeto() { }
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo' // definindo o atributo nome com valor padrão 'Anônimo' no protótipo
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael' // sobrescrevendo o atributo nome no escopo do objeto (shadowing)
obj2.falar()

const obj3 = {} // criando um novo objeto
obj3.__proto__ = MeuObjeto.prototype // definindo o protótipo para este novo objeto
obj3.nome = 'Objeto 3'
obj3.falar()

// Resumindo as equivalências dos protótipos
// quando o objeto é instanciado a partir da função eles são iguais
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)

// a função também tem um atributo __proto__ e esse atributo aponta para Function.prototype
console.log(MeuObjeto.__proto__ === Function.prototype)

// O protótipo do protótipo de uma Function aponta para Object.prototype
console.log(Function.prototype.__proto__ === Object.prototype)

// O protótipo do protótipo do Object aponta para valor nulo, o atributo existe mas não aponta para nada
console.log(Object.prototype.__proto__ === null)
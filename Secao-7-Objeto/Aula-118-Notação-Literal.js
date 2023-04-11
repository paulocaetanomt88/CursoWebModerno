const a = 1
const b = 2
const c = 3

const objeto1 = { a: a, b: b, c: c } // definindo atributos manualmente
const objeto2 = { a, b, c } // aqui os atributos são definidos por referência

console.log(objeto1, objeto2)

const nomeAttr = 'nota' // a constante nomeAttr recebe a string 'nota' como valor
const valorAttr = 7.99 // a constante valorAttr recebe o numeral float 7.99 como valor

const objeto3 = {}
objeto3[nomeAttr] = valorAttr // o valor de nomeAttr (nota) fica sendo a chave do atributo recebendo o conteúdo de valorAttr (7.99)
console.log(objeto3)

const objeto4 = {[nomeAttr]: valorAttr}
console.log(objeto4)

const objeto5 = {
    funcao1: function() {
        // ...
    },
    funcao2() {
        // ...
    }
}
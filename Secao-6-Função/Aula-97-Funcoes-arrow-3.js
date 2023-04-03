// this no ambiente Node faz referência a global dentro de uma função que não é arrow function 
// mas no ambiente de Browser em escopo global é igual a window

/* let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // retorna true aqui

const obj = {}

comparaComThis = comparaComThis.bind(obj) // fazendo a amarração com o contexto do objeto obj
comparaComThis(obj) // retorna true

comparaComThis(global) // retorna false aqui porque não faz mais referência a global */

// o this de uma função arrow é associado ao contexto onde a função foi escrita. *vantagem
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
// pessoa ->  aponta para um endereço de memória ex: 123
const pessoa = { nome: 'João' }

// usando uma constante podemos mudar o valor do atributo nome mas não podemos alterar o endereço de memória usado pela const pessoa
pessoa.nome = 'José'
console.log(pessoa)

/*
O método Object.freeze() congela um objeto: isto é, impede que novas propriedades sejam adicionadas a ele;
impede que as propriedades existentes sejam removidas; e impede que propriedades existentes, ou sua inumerabilidade,
configurabilidade, ou capacidade de escrita sejam alteradas. Em essência o objeto é efetivamente imutável.
O método retorna o objeto congelado.
*/
Object.freeze(pessoa) // congela o objeto pessoa para não ser alterado

pessoa.name = 'Pedro' // tentando alterar pessoa mas não vai fazer efeito porque está congelado 
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Maria' })
pessoaConstante.nome = 'Joaquina'
console.log(pessoaConstante)
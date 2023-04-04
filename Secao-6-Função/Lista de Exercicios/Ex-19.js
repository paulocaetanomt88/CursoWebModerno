/*
O cardápio de uma lanchonete é o seguinte:
Código:     Descrição do Produto:       Preço:
100         Cachorro Quente             R$ 3,00
200         Hambúrguer Simples          R$ 4,00
300         Cheeseburger                R$ 5,50
400         Bauru                       R$ 7,50
500         Refrigerante                R$ 3,50
600         Suco                        R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

function itemPedido(codigo, quantidade) {
    switch(codigo) {
        case 100:
            return "Cachorro Quente - Qtd: "+quantidade+" Valor total: R$"+(quantidade * 3.00).toFixed(2).toString().replace('.', ',')
            break;
        case 200:
            return "Hambúrguer Simples - Qtd: "+quantidade+" Valor total: R$"+(quantidade * 4.00).toFixed(2).toString().replace('.', ',')
            break;
        case 300:
            return "Cheeseburger - Qtd: "+quantidade+" Valor total: R$"+(quantidade * 5.50).toFixed(2).toString().replace('.', ',')
            break;
        case 400:
            return "Bauru - Qtd: "+quantidade+" Valor total: R$"+(quantidade * 7.50).toFixed(2).toString().replace('.', ',')
            break;
        case 500:
            return "Refrigerante - Qtd: "+quantidade+" Valor total: R$"+(quantidade * 3.50).toFixed(2).toString().replace('.', ',')
            break;
        case 600:
            return "Suco - Qtd: "+quantidade+" Valor total: R$"+(quantidade * 2.80).toFixed(2).toString().replace('.', ',')
            break;
        default:
            return "Código inválido ou produto inexistente."
    }
}

/*
// forma trabalhosa
console.log(itemPedido(100, 1))
console.log(itemPedido(100, 2))

console.log(itemPedido(200, 1))
console.log(itemPedido(200, 2))

console.log(itemPedido(300, 1))
console.log(itemPedido(300, 2))

console.log(itemPedido(400, 1))
console.log(itemPedido(400, 2))

console.log(itemPedido(500, 1))
console.log(itemPedido(500, 2))

console.log(itemPedido(600, 1))
console.log(itemPedido(600, 2))
*/

// Forma inteligente
for(let i=100; i<=600; i=i+100) {
    console.log(itemPedido(i, 1))
    console.log(itemPedido(i, 2))
}
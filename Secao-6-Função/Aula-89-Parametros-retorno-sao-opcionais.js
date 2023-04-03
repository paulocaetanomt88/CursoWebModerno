function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`) // se cair nesse if imprime no console mas não tem return então retorna undefined
    } else {
        return area
    }
}

console.log(area(3, 3))
console.log(area(3, 10))
console.log(area(2))
console.log(area(4, 5, 8, 10))
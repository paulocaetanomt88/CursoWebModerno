function bissexto(ano) {
    if((ano % 400 == 0) || (ano % 4 == 0 && ano % 100 != 0)) {
        return true
    } else {
        return false
    }
}

console.log(bissexto(2024))
// um 'break' não funciona em estrutura if, 
// funciona no 'switch' causando a saída do 'case' (condição)
// funciona no 'while' e no for

// 'continue' funciona no 'while' e no 'for'

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// break interage interrompendo a repetição do laço
console.log('Exemplo de break')
for (x in nums) {   
    if (x ==5) break
    console.log(`${x} = ${nums[x]}`)
} 


// continue pula para a próxima execução
console.log('Exemplo de continue')
for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

externo:
for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo
            console.log(`Par = ${a}, ${b}`)
    }
}
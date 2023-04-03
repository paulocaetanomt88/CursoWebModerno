// par nome / valor
const saudacao = 'Opa!' // contexto léxico 1

function exec() {
    
    const saudacao = 'Falaaa' // contexto léxico 2
    console.log(saudacao);
}

console.log(saudacao)
exec()

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Paulo',
    idade: 34,
    peso: 97,
    endereco: {
        logradouro: 'Rua Um Dois Três',
        numero: 321
    }
}

console.log(cliente)
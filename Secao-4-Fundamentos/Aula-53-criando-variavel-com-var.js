{
    {
        {
            {
                var sera = 'Será Ceará???'
            }
        }
    }
}
console.log(sera) // com var a variavel fica visível fora dos blocos (escopo global)

{
    {
        {
            {
                let nenao = 'Né não Zezão!!!'
                console.log(nenao)
            }
            
        }
    }
}
// console.log(nenao) // deu erro porque com let a variável fica visível apenas em escopo local

function teste() {
    var local =123
    console.log(local) // vai imprimir normal
}

teste()
console.log(local) // vai imprimir? Não, porque quando se define uma variável dentro de bloco de função o escopo dessa variável é apenas local
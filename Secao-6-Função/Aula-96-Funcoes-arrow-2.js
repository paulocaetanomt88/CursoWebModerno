// O this dentro de uma função arrow é fixo, baseado em contexto do qual a função foi escrita
// o fato de a função arrow ser chamada de locais diferentes não influencia

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa
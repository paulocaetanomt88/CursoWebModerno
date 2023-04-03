function Pessoa() {
    this.idade = 0;

    // a função setInterval é disparada por um temporizador e não o próprio objeto pessoa, por isso this.idade não vai funcionar
    
    const self = this
    setInterval(function() {
        //this.idade++
        self.idade++
        console.log(self.idade)
    }/* .bind(this) */, 1000) // para fazer funcionar precisa usar o .bind(this) que vai amarrar o this do objeto à chamada da função
}

new Pessoa
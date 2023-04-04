/*
Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function taxaCrescimento(altura1, taxa1, altura2, taxa2) {
    
    if (altura1 === altura2) {
        return "São de mesma altura"
    } else {
        let menor = 0
        let taxaDoMenor = 0
        let maior = 0
        let taxaDoMaior = 0

        if(altura1 < altura2) {
            menor = altura1
            taxaDoMenor = taxa1
            maior = altura2
            taxaDoMaior = taxa2
        } else if(altura1 > altura2){
            menor = altura2
            taxaDoMenor = taxa2
            maior = taxa1
            taxaDoMaior = taxa1
        }

        for(let i=1; i<= 18; i++) {
            menor += taxaDoMenor
            maior += taxaDoMaior

            if(menor > maior) {
                return `O menor passou o maior em altura em ${i} ano(s)`
            } 
        }

        return `O menor não passou o maior em altura`
    }
}

console.log(taxaCrescimento(120, 2, 125, 1))
console.log(taxaCrescimento(120, 2, 125, 2))
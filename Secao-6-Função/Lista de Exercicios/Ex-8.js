/*
    Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
    registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
    mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
    pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
    vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
    jogo. (Número do pior jogo).
*/

let stringPontos = "29, 32, 45, 6, 12, 49, 21, 37, 30, 51, 1"

function avaliaPontos(stringPontos) {
    let vetorPontos = stringPontos.split(', ')
    let ultimoRecorde = 0
    let recordes = 0
    let piorPontuacao = vetorPontos[0]
    let piorJogo = 0


    for (let i=0; i<vetorPontos.length; i++) {
        if(i>0) {
            if(parseInt(vetorPontos[i]) > ultimoRecorde) {
                ultimoRecorde = vetorPontos[i]
                recordes++;
            }
            if(parseInt(vetorPontos[i]) <= piorPontuacao ) {
                piorPontuacao = parseInt(vetorPontos[i])
                piorJogo = i + 1
            }
        }
        
    }

    return [recordes, piorJogo]
}

console.log(avaliaPontos(stringPontos))
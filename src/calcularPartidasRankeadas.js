let heroi = {
    vitorias: 24, // coloque quantas derrotas e vitorias o herói tem
    derrotas: 10,
    rank: null,
    taxaVitorias: null
}

function calculaTaxaVitorias(heroi) {
    return heroi.vitorias - heroi.derrotas
}

let taxaVitorias = calculaTaxaVitorias(heroi)

function defineRank(taxaVitorias) {
    if (taxaVitorias > 0 && taxaVitorias < 10){
        heroi.rank = "Bronze"
    }
    else if(taxaVitorias >= 10 && taxaVitorias < 20){
        heroi.rank = "Ferro"
    }
    else if(taxaVitorias >= 20 && taxaVitorias < 40){
        heroi.rank = "Prata"
    }
    else if(taxaVitorias >= 40 && taxaVitorias < 50){
        heroi.rank = "Ouro"
    }
    else if(taxaVitorias >= 50 && taxaVitorias < 60){
        heroi.rank = "Platina"
    }
    else if(taxaVitorias >= 60 && taxaVitorias < 80){
        heroi.rank = "Rubi"
    }
    else if(taxaVitorias >= 80 && taxaVitorias < 90){
        heroi.rank = "Esmeralda"
    }
    else if(taxaVitorias >= 90){
        heroi.rank = "Diamante"
    }
    else{
        console.log("Seu herói não está em nenhum Rank")
        return
    }
    
    switch(heroi.rank){
        case "Diamante":
            console.log(`O seu Herói tem a taxa V/D de [${taxaVitorias}] e está no Rank: ${heroi.rank}, O Rank mais alto`)
        break
        default:
            console.log(`O seu Herói tem a taxa V/D de [${taxaVitorias}] e está no Rank: ${heroi.rank}`)
        break
    }
}

defineRank(taxaVitorias)
let heroi = {
    vitorias: 14,
    derrotas: 25,
    rank: "",
    mediaVitorias: function(){
        return this.vitorias - this.derrotas
    }
}

function calcularRank(){
    if(heroi.mediaVitorias() < 0){heroi.rank = "nenhum"}
    else if(heroi.mediaVitorias() < 10){heroi.rank = "Bronze"}
    else if(heroi.mediaVitorias() < 20){heroi.rank = "Ferro"}
    else if(heroi.mediaVitorias() < 40){heroi.rank = "Prata"}
    else if(heroi.mediaVitorias() < 80){heroi.rank = "Ouro"}
    else if(heroi.mediaVitorias() < 160){heroi.rank = "Platina"}
    else if(heroi.mediaVitorias() < 320){heroi.rank = "Rubi"}
    else if(heroi.mediaVitorias() < 640){heroi.rank = "Esmeralda"}
    else{heroi.rank = "Diamante"}

    switch(heroi.rank){
        case "nenhum": console.log(`Seu Herói tem a Media de Vitórias de [${heroi.mediaVitorias()}] e por isso não está em rank nenhum`)
        break
        case "Diamante": console.log(`Seu Herói tem a Media de Vitórias de [${heroi.mediaVitorias()}] e está no Rank: ${heroi.rank} O mais Alto`)
        break
        default: console.log(`Seu Herói tem a Media de Vitórias de [${heroi.mediaVitorias()}] e está no Rank: ${heroi.rank}`)
    }
}

calcularRank()
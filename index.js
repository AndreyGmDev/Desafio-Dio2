let vitorias = 100
let derrotas = 30
let saldoVitorias
let rank

function calculadoraDeRank(){
    saldoVitorias = vitorias-derrotas
    if(saldoVitorias<=10){
        rank="Ferro"
    }
    if(saldoVitorias>=11 && saldoVitorias<=20){
        rank="Bronze"
    }
    if(saldoVitorias>=21 && saldoVitorias<=50){
        rank="Prata"
    }
    if(saldoVitorias>=51 && saldoVitorias<=80){
        rank="Ouro"
    }
    if(saldoVitorias>=81 && saldoVitorias<=90){
        rank="Diamante"
    }
    if(saldoVitorias>=91 && saldoVitorias<=100){
        rank="Lendário"
    }
    if(saldoVitorias>=101){
        rank="Imortal"
    }
}

calculadoraDeRank()
console.log("O Herói tem saldo de " + saldoVitorias + " vitórias e está no nível de " + rank)
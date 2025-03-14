const jogador1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS:0
};

const jogador2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS:0
};

const jogador3 = {
    NOME: "Yoshi",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS:0
};

const jogador4 = {
    NOME: "Peach",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS:0
};
const jogador5 = {
    NOME: "Browser",
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS:0
};

const jogador6 = {
    NOME: "Donkey Kong",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS:0
};

const player1 = jogador4
const player2 = jogador5

async function rolarDados(){
    return Math.floor(Math.random() *6 ) +1;
};

async function sorteiaBlocoPista(){
    let random = Math.random();
    let result;

    switch (true) {
        case random < 0.33:
            result = 'RETA'
            break;
        case random <0.66:
            result = 'CURVA'
            break
        default: result = 'CONFRONTO'            
    }
    return result;
}

async function logResultadoDado(nomePersonagem, block, resultadoDado, atributo) {
    console.log(`${nomePersonagem} 🎲 rolou um dado de ${block} ${resultadoDado} + ${atributo} = ${resultadoDado + atributo}`)

}

async function playRaceEngine(personagem1, personagem2){
    for(let round = 1; round <=5; round++){
        console.log(`🏁 Rodada ${round}`);

        // sortear bloco
        let block = await sorteiaBlocoPista();
        console.log(`Bloco: ${block}`);

        // rolar os dados
        let resultadoDado1 = await rolarDados(); 
        let resultadoDado2 = await rolarDados(); 
        
        // teste de habilidade
        let totalTesteHabilidade1 = 0;
        let totalTesteHabilidade2 = 0;

        if(block === 'RETA'){
            totalTesteHabilidade1 = resultadoDado1 + personagem1.VELOCIDADE
            totalTesteHabilidade2 = resultadoDado2 + personagem2.VELOCIDADE

           await logResultadoDado(personagem1.NOME,'velocidade', resultadoDado1, personagem1.VELOCIDADE)
           await logResultadoDado(personagem2.NOME,'velocidade', resultadoDado2, personagem2.VELOCIDADE)
            
        };

        if(block === 'CURVA'){
            totalTesteHabilidade1 = resultadoDado1 + personagem1.MANOBRABILIDADE
            totalTesteHabilidade2 = resultadoDado2 + personagem2.MANOBRABILIDADE

            await logResultadoDado(personagem1.NOME,'manobrabilidade', resultadoDado1, personagem1.MANOBRABILIDADE)
            await logResultadoDado(personagem2.NOME,'manobrabilidade', resultadoDado2, personagem2.MANOBRABILIDADE)
        };

        if(block === 'CONFRONTO'){
            let resuldadoPoder1 = resultadoDado1 + personagem1.PODER
            let resultadoPoder2 = resultadoDado2 + personagem2.PODER

            console.log(`${personagem1.NOME} confrontou com ${personagem2.NOME}! 🥊`);

            await logResultadoDado(personagem1.NOME,'poder', resultadoDado1, personagem1.PODER);
            await logResultadoDado(personagem2.NOME,'poder', resultadoDado2, personagem2.PODER);

            // if(resuldadoPoder1 > resultadoPoder2){
            //     if(personagem2.PONTOS > 0){
            //         console.log(`${personagem1.NOME} VENCEU o confronto! ${personagem2.NOME} perdeu 1 ponto 🐢`);   
            //         personagem2.PONTOS--}
            // }
            // esse IF pode ser substituido pela lógica abaixo
            // personagem2.PONTOS -=
            //     resuldadoPoder1 > resultadoPoder2 && personagem2.PONTOS > 0 ? 1:0;
            // ou ainda por essa
            if(resuldadoPoder1 > resultadoPoder2 && personagem2.PONTOS > 0){
                console.log(`${personagem1.NOME} VENCEU o confronto! ${personagem2.NOME} perdeu 1 ponto 🐢`);
                personagem2.PONTOS --;
            }
            
            
            // if(resuldadoPoder1 < resultadoPoder2){
            //     if(personagem1.PONTOS > 0){
            //         console.log(`${personagem2.NOME} VENCEU o confronto! ${personagem1.NOME} perdeu 1 ponto 🐢`)
            //         personagem1.PONTOS--}
            // }
            // esse IF pode ser substituido pela lógica abaixo
            // personagem1.PONTOS -=
            // resuldadoPoder1 < resultadoPoder2 && personagem1.PONTOS > 0 ? 1:0
            // ou ainda por essa
            if(resuldadoPoder1 < resultadoPoder2 && personagem1.PONTOS > 0){
                console.log(`${personagem2.NOME} VENCEU o confronto! ${personagem1.NOME} perdeu 1 ponto 🐢`)
                personagem1.PONTOS--
            }

            if(resuldadoPoder1 === resultadoPoder2){
                console.log("Confronto empatado! Nenhum ponto foi perdido")
            }
            //esse IF pode ser substituido pela lógica abaixo
            // console.log(resuldadoPoder1 === resultadoPoder2
            //     ? "Confronte empatado! Nenhum ponto foi perdido" : "")

        };

        // verificando o vencedor

        if(totalTesteHabilidade1 > totalTesteHabilidade2){
            console.log(`${personagem1.NOME} marcou um ponto!`);
            personagem1.PONTOS ++;
        }else if(totalTesteHabilidade1 < totalTesteHabilidade2){
            console.log(`${personagem2.NOME} marcou um ponto!`);
            personagem2.PONTOS ++;
        }

        console.log('-----------------------------------------')
    }        
}

async function declararVencedor(personagem1, personagem2){
    console.log("Resultado Final: ");
    console.log(`${personagem1.NOME}: ${personagem1.PONTOS} pontos(s)`)
    console.log(`${personagem2.NOME}: ${personagem2.PONTOS} pontos(s)`)

    if(personagem1.PONTOS > personagem2.PONTOS){
        console.log(`\n${personagem1.NOME} venceu a corrida! PARABÉNS! 🏆`);
    }else if(personagem1.PONTOS < personagem2.PONTOS){
        console.log(`\n${personagem2.NOME} venceu a corrida! PARABÉNS! 🏆`);
    }else{
        console.log('A corrida terminou em empate');
    }
}

(async function main(){

    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} Começando... \n`);
    
    await playRaceEngine(player1, player2);
    await declararVencedor(player1, player2);

})();


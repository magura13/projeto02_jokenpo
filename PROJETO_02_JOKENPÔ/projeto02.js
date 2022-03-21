const prompt = require(`prompt-sync`)();

console.log(`\tJOKENPÔ`); //TÍTULO
console.log(`\n\n`);
let name = prompt(`Qual o seu nome:`); // PERGUNTA INTERATIVA BÁSICA

console.log(`\n\n`);

do {
    // CRITÉRIO DE AVALIAÇÃO - UM "DO WHILE" PARA QUE TUDO ACONTEÇA ENQUANTO O JOGADOR QUISER JOGAR
    let choice = +prompt(`Quantas rodadas você quer jogar? `); // CRITERIO DE AVALIAÇÃO - QUANTAS RODADAS JOGAR

    console.clear();

    var contpc = 0; // CONTADORES EM "VAR" PARA CONTABILIZAR AS VITÓRIAS
    var contplayer = 0;
    let mychoice;

    for (let cont = 0; cont < choice; cont++) {
        // UM "FOR" PARA REPETIR O JOGO QUANTAS VEZES FOREM ESTABELICADAS PELO PLAYER(CONT < CHOICE)
        console.log(
            `Digite [0] para escolher PEDRA\nDigite [1] para escolher PAPEL\nDigite [2] para escolher TESOURA`,
        );
        
        do {
            mychoice = +prompt(`Qual a sua escolha:`); //ESCOLHA DO PLAYER
        } while (mychoice != 0 && mychoice != 1 && mychoice != 2);

        let jokenpo = [`PEDRA`, `PAPEL`, `TESOURA`];

        if (mychoice == 0) {
            //CRITERIO DE AVALIAÇÃO - LER A ESCOLHA DO PLAYER
            console.log(jokenpo[0]);
        } else if (mychoice == 1) {
            console.log(jokenpo[1]);
        } else {
            console.log(jokenpo[2]);
        }

        function getRandom(max) {
            return Math.floor(Math.random() * max);
        }

        let pcchoice = getRandom(3); // CRITÉRIO DE AVALIAÇÃO - DECIDIR ALEATORIAMENTE A DECISÃO DO COMPUTADOR

        if (pcchoice == 0 && mychoice == 2) {
            //VÁRIOS "IF" PARA CONTABILIZAR OS PONTOS DO PLAYER E DO PC
            contpc++;
        }
        if (pcchoice == 0 && mychoice == 1) {
            contplayer++;
        }
        if (pcchoice == 1 && mychoice == 0) {
            contpc++;
        }
        if (pcchoice == 1 && mychoice == 2) {
            contplayer++;
        }
        if (pcchoice == 2 && mychoice == 1) {
            contpc++;
        }
        if (pcchoice == 2 && mychoice == 0) {
            contplayer++;
        }
    }
    var again = +prompt(`Quer jogar novamente? [0] NÃO  [1] SIM:`); // CRITÉRIO DE AVALIAÇÃO - PERGUNTAR SE O JOGADOR QUER JOGAR NOVAMENTE, A RESPOSTA IRÁ PARA O "WHILE" NO FINAL DO ESCOPO
    if (again == 0 || again == 1) {
        console.log(
            `\n\n${name} venceu ${contplayer} rodadas. \nComputador venceu ${contpc} rodadas.`,
        );

        if (contplayer > contpc) {
            console.log(`${name} foi o grande campeão.`);
        } else if (contplayer == contpc) {
            console.log(`${name} e computador terminaram empatados`);
        } else {
            console.log(`${name} perdeu.`);
        }
    }
    console.log(`\n\n`);
} while (again == 1);

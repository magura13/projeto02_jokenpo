const prompt = require(`prompt-sync`)();
const figlet = require(`figlet`);
const colors = require(`colors`);

let rounds; //VARIÁVEL PARA USUÁRIO ESCOLHER QUANTAS RODADAS IRÁ FAZER
let cont = 0; //VARIÁVEL PARA CONTADOR RODAR DENTRO DO LOOP ATÉ ATINGIR O NÚMERO DE RODADAS
let playerChoice; //ESCOLHA DO JOGADOR
let playerWins = 0; //CONTADOR DE VITÓRIAS POR RODADAS DO JOGADOR
let pcWins = 0; //CONTADOR DE VITÓRIAS POR RODADAS DO PC
const jokenpo = ['ROCK', 'PAPER', 'SCISSORS']; //LISTA COM OS ELEMENTOS DO JOGO

console.log(//IDEIA E ENSINAMENTOS DO MASTER BLUEMER DENER BATISTA!
    figlet.textSync("JOKENPO\n", {//TITULO COM ARTE
      font: "big", 
      horizontalLayout: "full", 
      verticalLayout: "full",
      width: 90, 
      whitespaceBreak: false, 
    }).white
  );

let name = prompt(`What is your name:`);//PERGUNTA INTERATIVA BÁSICA

console.log(`\n\n`);

do {//LAÇO PRINCIPAL PARA REINICIAR CASO SEJA DA VONTADE DO PLAYER ENCERRANDO NA LINHA 73
    playerWins = 0;
    pcWins = 0;
    cont = 0;

    rounds = +prompt(`How much rounds do you wanna play: `);

    console.log(`\n\n
Hi, ${name}. Today we will play JOKENPÔ.\nThe options are: \n[0]ROCK \n[1]PAPER \n[2]SCISSORS\nWhat is your choice?
`);

    do {
        do {
            playerChoice = +prompt(`A:`);
            if (playerChoice != 0 && playerChoice != 1 && playerChoice != 2) {
                console.log(`Just type: \n[0]ROCK \n[1]PAPER \n[2]SCISSORS `);
            }
        } while (playerChoice != 0 && playerChoice != 1 && playerChoice != 2);

        let computerChoice = Math.floor(Math.random() * 3);

        console.log(`\n${name} chose ${jokenpo[playerChoice]}\nPC chose ${jokenpo[computerChoice]}\n`);

        if ((computerChoice === 0 && playerChoice === 2) || (computerChoice === 1 && playerChoice === 0) || (computerChoice === 2 && playerChoice === 1)) {
            pcWins++;
        }  else if ((playerChoice === 0 && computerChoice === 2) || (playerChoice === 1 && computerChoice === 0) || (playerChoice === 2 && computerChoice === 1) ) {
            playerWins++;
        }
        console.log(`${name}: ${playerWins} X ${pcWins}: PC\n*******************************`);
        cont++;
    } while (cont < rounds);

    if (pcWins > playerWins) {
        console.log(`\nPC won ${pcWins} rounds.\nYou won ${playerWins} rounds.\nPC is the champion.
        `);
    } else if (playerWins > pcWins) {
        console.log(`\nPC won ${pcWins} rounds.\nYou won ${playerWins} rounds.\n${name} is the champion.
        `);
    } else {
        console.log(`\nPC won ${pcWins} rounds.\nYou won ${playerWins} rounds.\nDRAW.
        `);
    }

    do {//LOOP PARA VERIFICAÇÃO SE A RESPOSTA É A QUE PRECISO
        restart = prompt(`Do you wanna play again. Yes or No:`).toLowerCase();
    } while (restart != 'yes' && restart != 'no');
    console.clear();
} while (restart === 'yes');
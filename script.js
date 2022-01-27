//GAME

let userScore = 0;
let computerScore = 0;
let roundWinner = '';


function playRound(userSelection, computerSelection){
    if(userSelection === computerSelection){
        roundWinner = 'TIE';
    }

    if(userSelection === 0 && computerSelection === 2 || userSelection === 1 && computerSelection === 0 || userSelection === 2 && computerSelection === 1){
        userScore ++;
        roundWinner = 'PLAYER';
    }
    if(computerSelection === 0 && userSelection === 2 || computerSelection === 1 && userSelection === 0 || computerSelection === 2 && userSelection === 1){
        computerScore ++;
        roundWinner = 'COMPUTER';
    }
}

function randomNumber(){
    return Math.floor(Math.random() * 3);
}

function gameOver(userScore, computerScore){
    return userScore === 5 || computerScore ===5;
}

// UI

// BUTTONS
const rockBtn = document.getElementById('rockUser');
const paperBtn = document.getElementById('paperUser');
const scissorBtn = document.getElementById('scissorUser');
//ELEMENTS
const resultadoUser = document.getElementById('resultadoUser');
const resultadoMaquina = document.getElementById('resultadoMaquina');
const roundWin = document.getElementById('rWinner');

rockBtn.addEventListener('click', () => userChoice(0));
paperBtn.addEventListener('click', () => userChoice(1));
scissorBtn.addEventListener('click', () => userChoice(2));

function userChoice(userSelection){
    if(gameOver(userScore, computerScore)){
        restart();
        return;
    }
    let computerNumber = randomNumber();
    playRound(userSelection, computerNumber);

    resultadoUser.textContent = `${userScore}`;
    resultadoMaquina.textContent = `${computerScore}`;
    roundWin.textContent = `${roundWinner} WINS THIS ROUND`
}

function restart(){
    userScore = 0;
    computerScore = 0;
}


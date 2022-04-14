//GAME

let userScore = 0;
let computerScore = 0;
let roundWinner = '';


function playRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        roundWinner = 'TIE';
    }

    if (userSelection === 0 && computerSelection === 2 || userSelection === 1 && computerSelection === 0 || userSelection === 2 && computerSelection === 1) {
        userScore++;
        roundWinner = 'PLAYER';
    }
    if (computerSelection === 0 && userSelection === 2 || computerSelection === 1 && userSelection === 0 || computerSelection === 2 && userSelection === 1) {
        computerScore++;
        roundWinner = 'COMPUTER';
    }
}

function randomNumber() {
    return Math.floor(Math.random() * 3);
}

function gameOver(userScore, computerScore) {
    if (userScore === 5 || computerScore === 5) {
        return true;
    } else {
        return false;
    };
};

// UI

// BUTTONS
const rockBtn = document.getElementById('rockUser');
const paperBtn = document.getElementById('paperUser');
const scissorBtn = document.getElementById('scissorUser');
//ELEMENTS
const resultadoUser = document.getElementById('resultadoUser');
const resultadoMaquina = document.getElementById('resultadoMaquina');
const roundWin = document.getElementById('rWinner');
const finalWinner = document.getElementById("fWinner");
const finalWinnerContainer = document.getElementById("fwContainer");
const button = document.getElementById("restartButton");

rockBtn.addEventListener('click', () => userChoice(0));
paperBtn.addEventListener('click', () => userChoice(1));
scissorBtn.addEventListener('click', () => userChoice(2));
button.addEventListener("click", () => restart());

function userChoice(userSelection) {
    if (gameOver(userScore, computerScore)) {
        if(whoWin() == "PLAYER"){
            finalWinner.innerHTML = "PLAYER WINS";
        }
        else{
            finalWinner.innerHTML = "MACHINE WINS";
        };
        finalWinnerContainer.classList.remove("hide");
        button.classList.remove("hide");
        return;
    } else {
        let computerNumber = randomNumber();
        playRound(userSelection, computerNumber);

        resultadoUser.textContent = `${userScore}`;
        resultadoMaquina.textContent = `${computerScore}`;
        if (roundWinner == "TIE") {
            roundWin.textContent = `${roundWinner}`
        } else {
            roundWin.textContent = `${roundWinner} WINS THIS ROUND`
        }
    }
}

function whoWin(){
    if(userScore == 5){
        return "PLAYER";
    }
    else{
        return "MACHINE"
    }
}

function restart() {
    resultadoUser.innerHTML = "";
    resultadoMaquina.innerHTML = "";
    roundWin.innerHTML = "";
    finalWinnerContainer.classList.add("hide");
    button.classList.add("hide");
    userScore = 0;
    computerScore = 0;
}
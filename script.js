
function randomInt(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

function computerPlay(){
    const play = ["Rock", "Paper", "Sissors"];
    let choice = randomInt(0,3);
    return play[choice];
}

function userPlay(){
    const play = ["Rock", "Paper", "Sissors"];
    let choice = prompt("Elije 1 = Rock, 2 = Paper o 3 = Sissors");
    let num = parseInt(choice) - 1;
    return play[num];
}

function playing(marcador){
    let computerChoice = computerPlay();
    let userChoice = userPlay();

    if(userChoice === computerChoice){
        return console.log("Empate");
    }
    else if(userChoice === "Rock" && computerChoice === "Sissors" || userChoice === "Paper" && computerChoice === "Rock" || userChoice ==="Sissors" && computerChoice == "Paper"){
            marcador[0] ++;
            console.log(`Marcador! User ${marcador[0]} - ${marcador[1]} Computer`)
            return "User wins";
    }
    else{
        marcador[1] ++;
        console.log(`Marcador! User ${marcador[0]} - ${marcador[1]} Computer`)
        return "Computer wins";
    }
}



function multiplePlay(cantidad){
    const marcador = [0,0];

    for(let i = 0; i < cantidad; i++){
        playing(marcador);
    }
}

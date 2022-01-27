function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function computerPlay() {
    let choice = randomInt(0, 3);
    return choice;
}

function playing(marcador, userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        marcador[0]++;
        marcador[1]++;
    } else if (userChoice === 0 && computerChoice === 2 || userChoice === 1 && computerChoice === 0 || userChoice === 2 && computerChoice == 1) {
        marcador[0]++;
        console.log(`Marcador! User ${marcador[0]} - ${marcador[1]} Computer`)
        return console.log("User wins");
    } else {
        marcador[1]++;
        console.log(`Marcador! User ${marcador[0]} - ${marcador[1]} Computer`)
        return console.log("Computer wins");
    }
}

const marcador = [0, 0];
const rock = document.querySelector('#rockUser');
const paper = document.querySelector('#paperUser');
const scissor = document.querySelector('#scissorUser');
const marcadorTemp = document.getElementById('template-marcador').content;
const marcadorCont = document.querySelector(".marcador");
const fragment = document.createDocumentFragment();



rock.addEventListener('click', () => {
    marcadorCont.innerHTML = '';
    playing(marcador, 0, computerPlay());
    marcadorTemp.getElementById('resultadoUser').textContent = `${marcador[0]}`;
    marcadorTemp.getElementById('resultadoMaquina').textContent = `${marcador[1]}`;
    const clone = marcadorTemp.cloneNode(true);
    fragment.appendChild(clone);
    marcadorCont.appendChild(fragment);
});
paper.addEventListener('click', () => {
    marcadorCont.innerHTML = '';
    playing(marcador, 1, computerPlay());
    marcadorTemp.getElementById('resultadoUser').textContent = `${marcador[0]}`;
    marcadorTemp.getElementById('resultadoMaquina').textContent = `${marcador[1]}`;
    const clone = marcadorTemp.cloneNode(true);
    fragment.appendChild(clone);
    marcadorCont.appendChild(fragment);
});
scissor.addEventListener('click', () => {
    marcadorCont.innerHTML = '';
    playing(marcador, 2, computerPlay());
    marcadorTemp.getElementById('resultadoUser').textContent = `${marcador[0]}`;
    marcadorTemp.getElementById('resultadoMaquina').textContent = `${marcador[1]}`;
    const clone = marcadorTemp.cloneNode(true);
    fragment.appendChild(clone);
    marcadorCont.appendChild(fragment);
});
const choices = ["rock", "paper", "scissors"];
let playerWins, computerWins;
const states = {
    selectionPhase: 0,
    resultPhase: 1,
    endPhase: 2
}

let gameState = states.selectionPhase;

let playerChoice = "";
let scores = document.querySelectorAll('.scores div');
let selectionElement = document.querySelector('.versus .player');
let computerElement = document.querySelector('.versus .computer');
let options = document.querySelectorAll('.options > img');
let gameText = document.querySelector('.game-text');

let gameBTN = document.querySelector('.submit');

options.forEach( o => {
    o.addEventListener('click', () => {
        if(gameState == states.selectionPhase) {
            playerChoice = o.getAttribute("data");
            selectionElement.src = `./img/${playerChoice}.png`;
        }
        
    });
});

gameBTN.addEventListener('mousedown', () => {
    switch(gameState) {
        case states.selectionPhase: gameBTN.src = "./img/submit_down.png";; break;
        case states.resultPhase: gameBTN.src = "./img/next_down.png";; break;
        case states.endPhase: gameBTN.src = "./img/new_down.png";; break;
    }
});

gameBTN.addEventListener('mouseup', () => {
    processGameClick();
});

function processGameClick() {
    switch(gameState) {
        case states.selectionPhase: selectionPhase(); break;
        case states.resultPhase: resultPhase(); break;
        case states.endPhase: endPhase(); break;
    }
}

function selectionPhase() {
    if(playerChoice != "") {               

        let computerChoice = getComputerChoice();
        computerElement.src = `./img/${computerChoice}.png`;
        let msg = playRound(playerChoice, computerChoice);
        msg == "You win!" ? playerWins++ : "You tied!";
        msg == "You lose!" ? computerWins++ : "You tied!";
        gameText.textContent = msg; 
        scores[0].textContent = `Player: ${playerWins}`;
        scores[1].textContent = `Computer: ${computerWins}`;

        if(playerWins == 5 || computerWins == 5) {
            gameBTN.src = './img/new.png';
            gameText.textContent = playerWins == 5 ? "You won the game!" : "The computer won the game!";
            gameState = states.endPhase;
        } else {
            gameBTN.src = './img/next.png';
            gameState = states.resultPhase;
        }
        
    } else {
        gameText.textContent += '!';
        gameBTN.src = './img/submit.png';
    }
}

function resultPhase() {

    gameState = states.selectionPhase;
    computerElement.src = "";
    selectionElement.src = "";
    playerChoice = "";
    gameBTN.src = "./img/submit.png";
    gameText.textContent = "Choose Your Weapon!";
    
}

function endPhase() {
    resultPhase();
    
    playerWins = 0;
    computerWins = 0;

    scores[0].textContent = `Player: ${playerWins}`;
    scores[1].textContent = `Computer: ${computerWins}`;
}

function game() {    
    playerWins = 4;
    computerWins = 4;
}

function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
}

function playRound(playerChoice, computerChoice) {

    console.log(`Player chose ${playerChoice}, Computer chose ${computerChoice}`);

    if(playerChoice == computerChoice) {
        return "Draw!";
    }

    if(playerChoice == "rock") {
        return computerChoice == "paper" ? "You lose!" : "You win!";
    }

    if(playerChoice == "paper") {
        return computerChoice == "scissors" ? "You lose!" : "You win!";
    }

    if(playerChoice == "scissors") {
        return computerChoice == "rock" ? "You lose!" : "You win!";
    }

    return "Error: Unexpected Scenario!";
}

game();
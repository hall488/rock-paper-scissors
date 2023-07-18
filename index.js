let choices = ["rock", "paper", "scissors"];
let playerWins, computerWins;

let playerSelection = "";
let selectionElement = document.querySelector('.versus .player');
let options = document.querySelectorAll('.options > img');

options.forEach( o => {
    o.addEventListener('click', () => {
        playerSelection = o.getAttribute("data");
        selectionElement.src = `./img/${playerSelection}.png`;
    });
});



function game() {    
    playerWins = 0;
    computerWins = 0;
    let playerChoice = "";
    
    for(;playerWins == 5 || computerWins == 5;) {        
        for(;;) {
            playerChoice = prompt("Select: Rock, Paper, or Scissors").toLowerCase();

            if(choices.includes(playerChoice)) break;
            else console.log("Unexpected input: Please type Rock, Paper, or Scissors!");
        }
        let computerChoice = getComputerChoice();
        let msg = playRound(playerChoice, computerChoice);
        msg == "You win!" ? playerWins++ : "";
        msg == "You lose!" ? computerWins++ : "";
        console.log(msg + ` : Round ${i} : Player Score ${playerWins} : Computer Score ${computerWins}`);        
    }

    if(playerWins == computerWins) {
        console.log("Tied game!");
    } else if(playerWins > computerWins) {
        console.log("Player wins game!")
    } else {
        console.log("Player loses game!");
    }
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
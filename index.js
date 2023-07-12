let choices = ["rock", "paper", "scissors"];
let playerWins, computerWins;

function game() {    
    playerWins, computerWins = 0
    
    for(let i = 0; i < 5; i++) {        
        for(;;) {
            let playerChoice = prompt("Select: Rock, Paper, or Scissors");

            if(choices.includes(playerChoice.toLowerCase())) break;
            else console.log("Unexpected input: Please type Rock, Paper, or Scissors!");
        }
        let computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
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
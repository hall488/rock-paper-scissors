let choices = ["rock", "paper", "scissors"];
let playerWins, computerWins;

function game() {    
    playerWins, computerWins = 0;
    let playerChoice = "";
    
    for(let i = 0; i < 5; i++) {        
        for(;;) {
            playerChoice = prompt("Select: Rock, Paper, or Scissors").toLowerCase();

            if(choices.includes(playerChoice)) break;
            else console.log("Unexpected input: Please type Rock, Paper, or Scissors!");
        }
        let computerChoice = getComputerChoice();
        let msg = playRound(playerChoice, computerChoice);
        msg == "You win!" ? playerWins++ : computerWins++;
        console.log(msg);
        
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
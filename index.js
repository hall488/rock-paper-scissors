let choices = ["rock", "paper", "scissors"];

function game() {
    let playerWins, computerWins = 0;
    
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
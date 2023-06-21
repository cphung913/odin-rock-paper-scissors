let playerName;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let choice;

    switch(randomNumber) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
        default:
            choice = "rock";
    }

    return choice;
}

function playerSelection() {
    let isValid = false;
    while (isValid == false) {
        console.log("Enter rock, paper, or scissors.");
        let selection = prompt();
        let choice = selection.toLowerCase().trim();

        if (choice == "rock" || choice == "paper" || choice == "scissors") {
            return choice;
        }
        console.log("Invalid response");
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0; i < 5; i++) {
        let playerChoice = playerSelection();
        let computerChoice = getComputerChoice();

        console.log("You chose " + playerChoice + ".");
        console.log("I chose " + computerChoice + ".")

        if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper") {
            playerScore++;
            console.log("You Won!");
        } else if (playerChoice == computerChoice) {
            console.log("Tie.");
        } else {
            computerScore++;
            console.log("I Won!");
        }

        if (computerScore >= 3 || playerScore >= 3) { 
            console.log("Final score: " + playerScore + " - " + computerScore);
            break; 
        }

        console.log("Score: " + playerScore + " - " + computerScore)
    }
}

function start() {
    console.log("Welcome!");
    console.log("What is your name?");
    playerName = prompt();
    console.log("Hi " + playerName + "!");
    console.log(playerName + ", let's play a game of rock paper scissors.");
    console.log("Best out of 5 wins.");
    game();
}

start();
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const options = [rockButton, paperButton, scissorsButton];
let playerScore = 0;
let computerScore = 0;

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

function game() {
    for(let i=0; i < 5; i++) {
        let playerChoice = playerSelection();
        let computerChoice = getComputerChoice();

        if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper") {
            playerScore++;
            
        } else if (playerChoice == computerChoice) {
            
        } else {
            computerScore++;
        }
    }
}

options.forEach(button =>  button.addEventListener('click', function(e) {
    options.forEach(i => i.classList.remove("selected"));
    button.classList.add("selected");
}))

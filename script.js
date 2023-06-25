const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const options = [rockButton, paperButton, scissorsButton];
const submitButton = document.querySelector(".submit");
const message = document.querySelector(".message");
const score = document.querySelector("#score");

let playerScore = 0;
let computerScore = 0;
let playerChoice;

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
    if(playerChoice == undefined) {
        message.textContent = "Please select Rock, Paper, or Scissors";
        return;
    }

    const computerChoice = getComputerChoice();
    let state = "";

    if (playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper") {
        playerScore++;
        state = "You Win!";
    } else if (playerChoice == computerChoice) {
        state = "Tie!";
    } else {
        computerScore++;
        state = "I Win!";
    }

    message.textContent = "You chose " + playerChoice + ". I chose " + computerChoice + ". " + state;
    score.textContent = playerScore + " - " + computerScore;

    playerChoice = undefined;
    options.forEach(i => i.classList.remove("selected"));
}

options.forEach(button =>  button.addEventListener('click', function(e) {
    options.forEach(i => i.classList.remove("selected"));
    playerChoice = `${button.className}`;
    button.classList.add("selected");
}))

submitButton.addEventListener('click', game);
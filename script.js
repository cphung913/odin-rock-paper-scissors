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

}

function game() {
    for(let i=0; i < 5; i++) {
        console.log("Enter rock, paper, or scissors.");
        let playerChoice = playerSelection().toLowerCase().trim();
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
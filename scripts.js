// Rock Paper Scissors Game

const playerDisplay = document.querySelector('.playerDisplay');
const computerDisplay = document.querySelector('.computerDisplay');
const resultDisplay = document.querySelector('.resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');


let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    let choice = choices[random];
    return choice;
}



function playGame(humanChoice) {
    
    const computerChoice = getComputerChoice();
    let result = "";

    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
        result =  "YOU WIN!";
    } else if (humanChoice === computerChoice) {
        result = "IT'S A TIE";
    } else {
        computerScore++;
        result = "YOU LOSE!";
    }

    playerDisplay.textContent = `PLAYER: ${humanChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch(result) {
        case "YOU WIN!":
            resultDisplay.classList.add('greenText');
            humanScore++;
            playerScoreDisplay.textContent = humanScore;
            break;

        case "YOU LOSE!":
            resultDisplay.classList.add('redText');
            computerScore;
            computerScoreDisplay.textContent = computerScore;
        }
}

playGame();


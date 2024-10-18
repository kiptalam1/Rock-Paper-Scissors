let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    let choice = choices[random];
    return choice;
}

// console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Enter your choice (rock/paper/scissors): ");
    return choice.toLowerCase();
}
    

// // console.log(getHumanChoice());
function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (humanChoice === computerChoice) {
        return "Its a draw!";
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));

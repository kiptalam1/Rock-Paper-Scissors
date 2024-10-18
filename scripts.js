
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    let choice = choices[random];
    return choice;
}


function getHumanChoice() {
    let choice = prompt("Enter your choice (rock/paper/scissors): ");
    return choice.toLowerCase();
}
    
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

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

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        if (humanSelection === 'rock' || humanSelection === "paper" || humanSelection === "scissors") {
            console.log(playRound(humanSelection, computerSelection));
            console.log(`Scores: Human ${humanScore} - Computer ${computerScore}`);
        } else {
            console.log("Invalid choice! Please enter 'rock', 'paper', or 'scissors'.");
            i--;
        }
    }

    if (humanScore > computerScore) {
        console.log(`Final Result: You win the game! Human ${humanScore} - Computer ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Final Result: You lose the game! Human ${humanScore} - Computer ${computerScore}`);
    } else {
        console.log(`Final Result: It's a draw! Human ${humanScore} - Computer ${computerScore}`);
    }
}

playGame();
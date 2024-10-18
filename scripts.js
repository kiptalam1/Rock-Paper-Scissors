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
    let choice = prompt("Enter a number 1/2/3: ");
    choice = parseInt(choice);
    if (choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else if (choice === 3) {
        return 'scissors';
    } else {
        return "Enter a valid choice!";
    }
}

// console.log(getHumanChoice());
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: 
            return 'rock';
        case 1: 
            return 'paper';
        case 2: 
            return 'scissors';
    }
}

function getHumanChoice() {
    let choice;
    while (true) {
        choice = prompt("Select: rock, scissors, or paper.");
        if (!choice) {
            console.log("Error, please select a valid choice.");
            continue;
        }
        choice = choice.toLowerCase();
        if (choice === "rock" || choice === "scissors" || choice === "paper") {
            return choice;
        } else {
            console.log("Error, please select a valid choice.");
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie! You both picked the same choice.";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win! Rock beats scissors!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats rock!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! Scissors beats paper!";
    } else {
        computerScore++;
        return "You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice + ".";
    }
}

// Play a round and update scores
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log("Human choice: " + humanChoice);
console.log("Computer choice: " + computerChoice);
console.log(playRound(humanChoice, computerChoice));
console.log("Current score - Human: " + humanScore + ", Computer: " + computerScore);


function playGame() { for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log("Round " + (i + 1) + ":");
    console.log("Human choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);
    console.log(playRound(humanChoice, computerChoice));
    console.log("Current score - Human: " + humanScore + ", Computer: " + computerScore);
}

if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
} else if (humanScore < computerScore) {
    console.log("Sorry, you lost the game. Better luck next time!");
} else {
    console.log("The game is a tie!");
}
}



playGame();
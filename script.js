let humanScore = 0
let computerScore = 0

function getComputerChoice () {
    let choises = ["rock","paper","scissors"];
    return choises[Math.floor(Math.random()*3)];
    
}

function getHumanChoice () {
    return prompt("Choose your weapon!").toLowerCase();
    
}

function playRound (humanChoice, computerChoice) {
    
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log ("You lose! "+computerChoice+" beats"+humanChoice+"!")
        computerScore++;
    }

    if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log ("You lose! "+computerChoice+" beats"+humanChoice+"!")
        computerScore++;
    }

    if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log ("You lose! "+computerChoice+" beats"+humanChoice+"!")
        computerScore++;
    }

    if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log ("You win! "+humanChoice+" beats"+computerChoice+"!")
        humanScore++;
    }

    if (humanChoice == "paper" && computerChoice == "rock") {
        console.log ("You win! "+humanChoice+" beats"+computerChoice+"!")
        humanScore++;
    }

    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log ("You win! "+humanChoice+" beats"+computerChoice+"!")
        humanScore++;
    }

    else {
        console.log("Draw! You both chose " + humanSelection +"!")
    }
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);




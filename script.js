function getComputerChoice () {
    let choises = ["rock","paper","scissors"];
    return choises[Math.floor(Math.random()*3)];
    
}

function getHumanChoice () {
    return prompt("Choose your weapon!").toLowerCase();
    
}

function playRound (humanChoice) {

    const computerChoice = getComputerChoice();

    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log ("You lose! "+computerChoice+" beats "+humanChoice+"!")
        computerScore++;
    }

    if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log ("You lose! "+computerChoice+" beats "+humanChoice+"!")
        computerScore++;
    }

    if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log ("You lose! "+computerChoice+" beats "+humanChoice+"!")
        computerScore++;
    }

    if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log ("You win! "+humanChoice+" beats "+computerChoice+"!")
        humanScore++;
    }

    if (humanChoice == "paper" && computerChoice == "rock") {
        console.log ("You win! "+humanChoice+" beats "+computerChoice+"!")
        humanScore++;
    }

    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log ("You win! "+humanChoice+" beats "+computerChoice+"!")
        humanScore++;
    }

    if (humanChoice == computerChoice) {
        console.log("Draw! You both chose " + humanChoice +"!")
    }
      
}

let humanScore = 0;
let computerScore = 0;
 


const paper = document.querySelector("#paper");
paper.addEventListener("click",() => {
    playRound("paper");
})
    
const rock = document.querySelector("#rock");
rock.addEventListener("click",() => {
    playRound("rock");
})

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click",() => {
    playRound("scissors");
})




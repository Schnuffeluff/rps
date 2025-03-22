function getComputerChoice () {
    let choises = ["rock","paper","scissors"];
    return choises[Math.floor(Math.random()*3)];
    
}

function getHumanChoice () {
    return prompt("Choose your weapon!").toLowerCase();
    
}


let humanScore = 0;
let computerScore = 0;
let result = document.querySelector("#results");
let text = document.createElement("p");
let score = document.querySelector("#score");
let num = document.createElement("h3");

num.textContent = "Humanscore:"+humanScore+" Computerscore:"+computerScore;
score.appendChild(num);

function playRound (humanChoice) {

    const computerChoice = getComputerChoice();
    
    

    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log ("You lose! "+computerChoice+" beats "+humanChoice+"!")
        computerScore++;
        text.textContent = "You lose! "+computerChoice+" beats "+humanChoice+"!";
        result.appendChild(text);
    }

    if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log ("You lose! "+computerChoice+" beats "+humanChoice+"!")
        computerScore++;
        text.textContent = "You lose! "+computerChoice+" beats "+humanChoice+"!";
        result.appendChild(text);
    }

    if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log ("You lose! "+computerChoice+" beats "+humanChoice+"!")
        computerScore++;
        text.textContent = "You lose! "+computerChoice+" beats "+humanChoice+"!";
        result.appendChild(text);
    }

    if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log ("You win! "+humanChoice+" beats "+computerChoice+"!")
        humanScore++;
        text.textContent = "You win! "+humanChoice+" beats "+computerChoice+"!";
        result.appendChild(text);
    }

    if (humanChoice == "paper" && computerChoice == "rock") {
        console.log ("You win! "+humanChoice+" beats "+computerChoice+"!")
        humanScore++;
        text.textContent = "You win! "+humanChoice+" beats "+computerChoice+"!";
        result.appendChild(text);
    }

    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log ("You win! "+humanChoice+" beats "+computerChoice+"!")
        humanScore++;
        text.textContent = "You win! "+humanChoice+" beats "+computerChoice+"!";
        result.appendChild(text);
    }

    if (humanChoice == computerChoice) {
        console.log("Draw! You both chose " + humanChoice +"!")
        text.textContent = "Draw! You both chose " + humanChoice +"!";
        result.appendChild(text);
    }
     
    if (humanScore == 5) {
        text.textContent = "You have won!";
        result.appendChild(text);
    }

    if (computerScore == 5) {
        text.textContent = "Computer has won!";
        result.appendChild(text);
    }

    num.textContent = "Humanscore:"+humanScore+" Computerscore:"+computerScore;
    score.appendChild(num);

}



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




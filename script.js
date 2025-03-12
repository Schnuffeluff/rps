


function getComputerChoice () {
    let choises = ["rock","paper","scissors"];
    return choises[Math.floor(Math.random()*3)];
    
}

console.log(getComputerChoice());
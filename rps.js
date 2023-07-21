function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    let computerSelection;
    if(number === 1){
        computerSelection = "rock";
    }
    else if(number === 2){
        computerSelection = "paper";
    }
    else{
        computerSelection = "scissors";
    }
    return computerSelection
}

function result(playerSelection, computerSelection){
    let gameResult;
    if(playerSelection === "rock" && computerSelection === "paper"){
        gameResult = "computer wins";
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        gameResult = "computer wins";
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        gameResult = "computer wins";
    }
    else if(playerSelection === "rock" && computerSelection === "rock"){
        gameResult = "It's a tie";
    }
    else if(playerSelection === "paper" && computerSelection === "paper"){
        gameResult = "It's a tie";
    }
    else if(playerSelection === "scissors" && computerSelection === "scissors"){
        gameResult = "It's a tie";
    }
    else{
        gameResult = "player wins";
    }
    return gameResult;
}


const computerSelection = getComputerChoice();
const rock = document.querySelector("#rockBtn");
const paper = document.querySelector("#paperBtn");
const scissors = document.querySelector("#scissorsBtn");
const resultDiv = document.querySelector(".result");
const div = document.createElement("div");

rock.addEventListener("click", ()=>{
    const element = result("rock",computerSelection);
    div.textContent = element;
});

paper.addEventListener("click", ()=>{
    const element = result("paper",computerSelection);
    div.textContent = element;
});

scissors.addEventListener("click", ()=>{
    const element = result("scissors",computerSelection);
    div.textContent = element;
});

resultDiv.appendChild(div);
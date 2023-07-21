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
        gameResult = "Computer wins";
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        gameResult = "Computer wins";
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        gameResult = "Computer wins";
    }
    else if(playerSelection === computerSelection){
        gameResult = "It's a tie";
    }
    else{
        gameResult = "Player wins";
    }
    return gameResult;
}

const rock = document.querySelector("#rockBtn");
const paper = document.querySelector("#paperBtn");
const scissors = document.querySelector("#scissorsBtn");

const pScore = document.querySelector('.player-score');
const cScore = document.querySelector('.computer-score');
const resultDiv = document.querySelector(".result");


let playerScore = 0;
let computerScore = 0;

        
rock.addEventListener("click", ()=>{
    const div = document.createElement("div");
    const computerSelection = getComputerChoice();
    const element = result("rock",computerSelection);
    
    if(element === "Player wins"){
        playerScore++;
        pScore.textContent = `Player score: ${playerScore}`;
    }
    else if(element === "Computer wins"){
        computerScore++;
        cScore.textContent = `Computer score: ${computerScore}`;
    }
    
    div.textContent = element;
    resultDiv.appendChild(div);

});

paper.addEventListener("click", ()=>{
    const div = document.createElement("div");
    const computerSelection = getComputerChoice();
    const element = result("paper",computerSelection);

    if(element === "Player wins"){
        playerScore++;
        pScore.textContent = `Player score: ${playerScore}`;
    }
    else if(element === "Computer wins"){
        computerScore++;
        cScore.textContent = `Computer score: ${computerScore}`;
    }

    div.textContent = element;
    resultDiv.appendChild(div);
});

scissors.addEventListener("click", ()=>{
    const div = document.createElement("div");
    const computerSelection = getComputerChoice();
    const element = result("scissors",computerSelection);

    if(element === "Player wins"){
        playerScore++;
        pScore.textContent = `Player score: ${playerScore}`;
    }
    else if(element === "Computer wins"){
        computerScore++;
        cScore.textContent = `Computer score: ${computerScore}`;
    }

    div.textContent = element;
    resultDiv.appendChild(div);
});









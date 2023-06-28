function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    if(number === 1){
        return "rock";
    }
    else if(number === 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function result(playerSelection, computerSelection){
    if(playerSelection === "rock" && computerSelection === "paper"){
        return "computer wins";
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "computer wins";    
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "computer wins";
    }
    else{
        return "player wins";
    }
}


function game(){
    for(let i=0; i<2; i++){
        const playerSelection = prompt("Enter choice [rock/paper/scissors]: ").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(result(playerSelection,computerSelection));
    }
}

game();
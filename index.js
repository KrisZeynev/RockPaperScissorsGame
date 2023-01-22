const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const buttons = document.querySelectorAll(".buttons");
const resetBtn = document.querySelector("#resBtn");

const chooseText = document.querySelector("#chooseText");
chooseText.textContent = "Choose wisely!"

//
let counterText = document.querySelector("#counterText"); 
let drawsCountText = document.querySelector("#drawsCountText");
let playerCountText = document.querySelector("#playerCountText");
let computerCountText = document.querySelector("#computerCountText");

let gameCount = 0;
let playerCountWins = 0;
let computerCountWins = 0;
let drawsCount = 0;
//

let player;
let computer;
let result;


buttons.forEach(button => button.addEventListener("click", () => {
     
    player = button.textContent;
    computerTurn() 

    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = "Result: " + checkWinner();

    counterText.textContent = `Games: ${gameCount}`;
    drawsCountText.textContent = `Draws: ${drawsCount}`;
    playerCountText.textContent = `Wins: ${playerCountWins}`;
    computerCountText.textContent = `Loses: ${computerCountWins}`;
}));

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1:
            gameCount++;
            computer = "ROCK";
            break;
        case 2:
            gameCount++;
            computer = "PAPER";
            break;
        case 3:
            gameCount++;
            computer = "SCISSORS";
            break;
        default:
            break;
    }
}

function checkWinner(){

    if (player == computer) {
        drawsCount++;
        return "DRAW";

    } else if (computer == "ROCK"){

        if (player == "PAPER") {
            playerCountWins++;
            return "You win!";

        } else{
            computerCountWins++;
            return "You lose!";
        }
    } else if (computer == "PAPER"){

        if (player == "SCISSORS") {
            playerCountWins++;
            return "You win!";

        } else{
            computerCountWins++;
            return "You lose!"
        }

    } else if (computer == "SCISSORS"){
        if (player == "ROCK") {
            playerCountWins++;
            return "You win!";
        } else{
            computerCountWins++;
            return "You lose!";
        }
    }
}

resetBtn.addEventListener("click", () => {
    
    computerTurn()
    playerText.textContent = `Player: `;
    computerText.textContent = `Computer: `;
    resultText.textContent = "Result: ";
    
    gameCount = 0;
    counterText.textContent = "Games:";

    drawsCount = 0;
    drawsCountText.textContent = "Draws:";

    playerCountWins = 0;
    playerCountText.textContent = "Wins:";

    computerCountWins = 0;
    computerCountText.textContent = "Loses:";
})
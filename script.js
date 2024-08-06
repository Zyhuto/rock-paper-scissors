console.log("Hello World");

function getComputerChoice () {
    switch (Math.floor(Math.random()*3+1)) {
        case 1:
            return "rock";
        case 2:
            return "paper";
            
        case 3:
            return "scissors"
    }
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "draw";
    } else {
        switch (humanChoice) {
            case "rock":
                return computerChoice == "paper" ? "computer" : "human";
            case "paper":
                return computerChoice == "rock" ? "human" : "computer";
            case "scissors":
                return computerChoice == "paper" ? "human" : "computer";
        }
    }
}

let humanScore = 0;
let computerScore = 0;

const roundResultText = document.querySelector(".round-result");
const humanScoreText = document.querySelector(".player-score");
const computerScoreText = document.querySelector(".computer-score");

const rpsButtons = document.querySelectorAll(".button-container > button");
rpsButtons.forEach(x => x.addEventListener("click", e => 
   processClick(e.target.id)

));

function processClick (id) {
    let roundResult = playRound(id, getComputerChoice());
    switch (roundResult){
        case "draw":
        roundResultText.textContent = "Draw!"
        break;
        case "human":
            roundResultText.textContent = "Human Won!";
            humanScore++;
            break;
        case "computer":
            roundResultText.textContent = "Computer Won!";
            computerScore++;
            break;
        }
    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;

    if ( computerScore > 4) {
        alert("Computer won the Game!")
        location.reload();
    }
    if ( humanScore > 4) {
        alert("Human won the Game!")
        location.reload();
    }
}

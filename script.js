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

function getHumanChoice () {
    let choice = prompt('Enter "rock", "paper" or "scissor"').toLocaleLowerCase();
    let testSet = new Set(["rock", "paper", "scissor"]);
    if (testSet.has(choice)) {
        return choice;
    } else {
        alert("wrong Input")
        return getHumanChoice();
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
















function playGame (rounds) {
    let humanScore = 0;
    let computerScore = 0;
    
    for (counter = 1; counter <= rounds; counter++) {
        let result = playRound(getHumanChoice(),getComputerChoice())
        let alertMessage = "";
        if (result === "draw") {
            alertMessage += "It's a draw"
        } else {
            alertMessage += `${result} won the Round!`
            if (result === "human") {
                humanScore++;
            } else {computerScore++}
        }
        alertMessage += `\nNew Score: Human ${humanScore} Computer ${computerScore}`
        alert(alertMessage);


    }
    if (humanScore>computerScore) {
        alert("Human Won the game!")
    } else if (humanScore = computerScore) {
        alert("It's a Draw!")
    } else {
        alert("Computer won the game!")
    }
} 

//playGame(5);
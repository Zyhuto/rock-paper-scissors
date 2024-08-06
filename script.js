console.log("Hello World");





function getComputerChoice () {
    switch (Math.floor(Math.random()*3+1)) {
        case 1:
            return "rock";
        case 2:
            return "paper";
            
        case 3:
            return "scissor"
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

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "draw";
    } else {
        switch (humanChoice) {
            case "rock":
                return computerChoice == "paper" ? "computer" : "human";
            case "paper":
                return computerChoice == "rock" ? "human" : "computer";
            case "scissor":
                return computerChoice == "paper" ? "human" : "computer";
        }
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

playGame(5);
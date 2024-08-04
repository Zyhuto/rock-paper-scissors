console.log("Hello World");


function getRandomIntInclusive(min, max) {
    // Create a random Integer min <= x <= max
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}


function getComputerChoice () {
    switch (getRandomIntInclusive(1,3)) {
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
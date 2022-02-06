// evaluate a move
function getMove(num) {

    if (num === 0) {
        return ("Rock");
    } else if (num === 1) {
        return ("Paper");
    } else return ("Scissors");
}

// initialize result of round
result = "";

// function for the computer's moves
function computerPlay() {
    // randomizer 0-2
    computerSelection = Math.floor(Math.random()*3);

    // return the random value in a string format
    return getMove(computerSelection);
    
}

// function for one round of the game
function startRpsRound(playerSelection, computerSelection = computerPlay()) {

    // declaring winners and returning strings with info. converts values into lowercase, so it's case-insensitive
    if (playerSelection.toLowerCase() === "rock") {

        switch(computerSelection.toLowerCase()) {
            case "rock": 
                result = "It's a tie! You both chose rock!";
                break;
            case "paper":
                result = "You lose! Paper beats rock!";
                break;
            case "scissors":
                result = "You win! Rock beats scissors!";
                break;
         }

         return result;

    } else if (playerSelection.toLowerCase() === "paper") {

        switch(computerSelection.toLowerCase()) {
            case "paper": 
                result = "It's a tie! You both chose paper!";
                break;
            case "rock":
                result = "You win! Paper beats rock!";
                break;
            case "scissors":
                result = "You lose! Scissors beats paper!";
                break;
         }

        return result;

    } else if (playerSelection.toLowerCase() === "scissors") {

        switch(computerSelection.toLowerCase()) {
            case "scissors": 
                result = "It's a tie! You both chose scissors!";
                break;
            case "paper":
                result = "You win! Scissors beats paper!";
                break;
            case "rock":
                result = "You lose! Rock beats scissors!";
                break;
         }

        return result;

    } else {
        console.log("Can't even type one of these words in properly, can you, knucklehead?");
        return result = "(S)He done did it...";
    }
}

// function for a best of 5 game
function game() {

    let playerScore = 0;
    let computerScore = 0;

    // loop prompt + game round 5 times
    for (let i = 0; i < 5; i++) {

        // prompts the player to insert their move
        let playerSelection = prompt(message="Enter your choice: Rock | Paper | Scissors.");

        startRpsRound(playerSelection);

        // if the result from startRpsRound function is win/tie/lose, act accordingly, update score and declare it.
        if (result.includes("win!")) {
            playerScore += 1;
            console.log(`${result} \nYour score is: ${playerScore}. \nThe computer's score is: ${computerScore}`);

        } else if (result.includes("tie")) {
            console.log(`${result} \nYour score is: ${playerScore}. \nThe computer's score is: ${computerScore}`);
            i--;

        } else if (result.includes("lose")) {
            computerScore += 1;
            console.log(`${result} \nYour score is: ${playerScore}. \nThe computer's score is: ${computerScore}`);
        } else {
            i--;
        }

    }
    
    // Declare winner
    if (playerScore < computerScore) {
        console.log("Sorry kiddo. Get better. You lose.");

    } else {
        console.log("/////////\nCongratulations, dude, you beat the idiot computer\n/////////");
    }
}
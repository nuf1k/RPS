// evaluate a move
function getMove(num) {

    if (num === 0) {
        return ("Rock");
    } else if (num === 1) {
        return ("Paper");
    } else return ("Scissors");
}

// initialize result of round
let result = "";

// initialize round count
let roundAmount = 0;
let computerWinsCount = 0;
let userWinsCount = 0;

// define game starting buttons
let threePt = document.querySelector("#to3");
let fivePt = document.querySelector("#to5");
let tenPt = document.querySelector("#to10");

// define game buttons
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

// define game over
let gameOverScreen = document.querySelector(".game-over-screen")
let gameOver = document.querySelector(".game-over");

// round count selection listeners
threePt.addEventListener("click", function() {
    roundAmount = 3;
    gameStartUiSwitch();
});

fivePt.addEventListener("click", function() {
    roundAmount = 5;
    gameStartUiSwitch();
});

tenPt.addEventListener("click", function() {
    roundAmount = 10;
    gameStartUiSwitch();
});

function gameStartUiSwitch() {
    gameStartUi = document.querySelector(".game-start");
    gameUi = document.querySelector(".game-ui")

    gameStartUi.setAttribute("style","display:none");
    gameUi.setAttribute("style","display:flex")
}


// function for the computer's moves
function computerPlay() {
    // randomizer 0-2
    computerSelection = Math.floor(Math.random()*3);

    // return the random value in a string format
    return getMove(computerSelection);
    
}

function checkWinner() {
    if (computerWinsCount >= roundAmount) {
        gameUi.setAttribute("style", "display:none");
        gameOverScreen.setAttribute("style", "display:flex")
        gameOver.textContent = "Game over! You lose!"
    } else if (userWinsCount >= roundAmount) {
        gameUi.setAttribute("style", "display:none");
        gameOverScreen.setAttribute("style", "display:flex")
        gameOver.textContent = "You win! Congratulations!"
    } else {
        // pass
    }
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
                computerWinsCount += 1;
                break;
            case "scissors":
                result = "You win! Rock beats scissors!";
                userWinsCount += 1;
                break;
        }
        checkWinner()
        return result;

    } else if (playerSelection.toLowerCase() === "paper") {

        switch(computerSelection.toLowerCase()) {
            case "paper": 
                result = "It's a tie! You both chose paper!";
                break;
            case "rock":
                result = "You win! Paper beats rock!";
                userWinsCount += 1;
                break;
            case "scissors":
                result = "You lose! Scissors beats paper!";
                computerWinsCount += 1;
                break;
        }
        checkWinner()
        return result;

    } else if (playerSelection.toLowerCase() === "scissors") {

        switch(computerSelection.toLowerCase()) {
            case "scissors": 
                result = "It's a tie! You both chose scissors!";
                break;
            case "paper":
                result = "You win! Scissors beats paper!";
                userWinsCount += 1;
                break;
            case "rock":
                result = "You lose! Rock beats scissors!";
                computerWinsCount += 1;
                break;
        }
        checkWinner()
        return result;

    } 

}

resultDiv = document.querySelector(".results");
userChoice = document.querySelector(".user-choice");
computerChoice = document.querySelector(".computer-choice");
userPoints = document.querySelector(".user-points");
computerPoints = document.querySelector(".computer-points");

rock.addEventListener("click", function() {
    startRpsRound("rock");
    userChoice.innerHTML = "You chose: Rock";
    computerChoice.innerHTML = "Computer chose: " + getMove(computerSelection);
    resultDiv.innerHTML = result;
    userPoints.innerHTML = "You currently have: " + userWinsCount + " points"
    computerPoints.innerHTML = "Computer currently has: " + computerWinsCount + " points"

});

paper.addEventListener("click", function() {
    startRpsRound("paper");
    userChoice.innerHTML = "You chose: Paper";
    computerChoice.innerHTML = "Computer chose: " + getMove(computerSelection);
    resultDiv.innerHTML = result;
    userPoints.innerHTML = "You currently have: " + userWinsCount + " points"
    computerPoints.innerHTML = "Computer currently has: " + computerWinsCount + " points"
});

scissors.addEventListener("click", function() {
    startRpsRound("scissors");
    userChoice.innerHTML = "You chose: Scissors";
    computerChoice.innerHTML = "Computer chose: " + getMove(computerSelection);
    resultDiv.innerHTML = result;
    userPoints.innerHTML = "You currently have: " + userWinsCount + " points"
    computerPoints.innerHTML = "Computer currently has: " + computerWinsCount + " points"
});
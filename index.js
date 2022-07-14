// main
let rounds = 1;
rounds = prompt("How many rounds to win?");
let player_wins = 0;
let computer_wins = 0;
let displayUserScore = document.querySelector(".user-score");
let displayCPUScore = document.querySelector(".cpu-score");
let displayResult = document.querySelector(".result");
displayResult.querySelector(":scope > p");
// Starts playing the rounds
const imgSelections = document.querySelectorAll("img");
imgSelections.forEach(selection => {
    selection.addEventListener("click", function () {
        playRound(selection.id);
    });
});

function computerPlay() {
    // cpu randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    // checks for tie, same choice
    if (player_wins < rounds && computer_wins < rounds) {
        // while game is still playing
        if (playerSelection == computerSelection) {
            // tie
            console.log("It's a tie. You both chose:\t" + playerSelection);
            displayResult.textContent = "It's a tie. You both chose:\t" + playerSelection;
        } else if ((playerSelection == "Paper" && computerSelection == "Rock") || 
        (playerSelection == "Rock" && computerSelection == "Scissors") || 
        (playerSelection == "Scissors" && computerSelection == "Paper")) {
            // player wins
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
            displayResult.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
            player_wins++;
        } else {
            // player loses
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
            displayResult.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
            computer_wins++;
        }
        displayUserScore.textContent = player_wins;
        displayCPUScore.textContent = computer_wins;
    }
    if (player_wins >= rounds || computer_wins >= rounds) {
        console.log("The Game is over");
        if (player_wins > computer_wins) {
            displayResult.textContent = "Congratulations! You won the game.";
        } else {
            displayResult.textContent = "Sorry! The computer won the game.";
        }
    }
    return 0;
}
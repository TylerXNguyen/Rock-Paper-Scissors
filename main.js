// main
let rounds = 1;
//rounds = prompt("How many rounds to win?");
let player_wins = 0;
let computer_wins = 0;
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
    if (playerSelection == computerSelection) {
        console.log("It's a tie. You both chose:\t" + playerSelection);
        return 0;
    }
    let player_winner = false; // default computer wins
    // checks cases where player wins
    if ((playerSelection == "Paper" && computerSelection == "Rock") || 
    (playerSelection == "Rock" && computerSelection == "Scissors") || 
    (playerSelection == "Scissors" && computerSelection == "Paper")) {
        player_winner = true
    }
    // checks who won the round
    if (player_winner == true) {
        // player wins
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
        player_wins++;
        return 0;
    } else {
        // player loses
        console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        computer_wins++;
        return 0;
    }
}
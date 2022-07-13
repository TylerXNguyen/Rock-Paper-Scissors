// main
let rounds = 5
console.log(game(rounds))

function computerPlay() {
    // cpu randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
    let selection = Math.floor(Math.random() * 3);
    if (selection == 0) {
        return "Rock"
    } else if (selection == 1) {
        return "Paper"
    } else if (selection == 2) {
        return "Scissors"
    } else {
        return "Error"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    playerSelection = capitalize(playerSelection)
    // checks for tie, same choice
    if (playerSelection == computerSelection) {
        console.log("It's a tie. You both chose:\t" + playerSelection)
        return 0
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
        console.log("You Win! " + playerSelection + " beats " + computerSelection)
        return 1
    } else {
        // player loses
        console.log("You Lose! " + computerSelection + " beats " + playerSelection)
        return -1
    }
}

function capitalize(s) {
    s = s.toLowerCase()
    s = s.charAt(0).toUpperCase() + s.substr(1)
    return s
}

function game(rounds) {
    let player_wins = 0
    let computer_wins = 0
    // runs rounds
    for (let i = 0; i < rounds; i++) {
        console.log("\n---Round " + (i + 1) + "---")
        // plays a round and updates score of winner
        let computerSelection = computerPlay()
        // prompts user for input
        let playerSelection = prompt("Rock, Paper, or Scissors? ")
        let round_winner = playRound(playerSelection, computerSelection);
        if (round_winner == 1) {
            player_wins++;
        } else if (round_winner == -1) {
            computer_wins++;
        }
    }
    if (player_wins > computer_wins) {
        return("\nYou beat the computer with " + player_wins + " wins over " + computer_wins + " computer wins.")
    } else if (player_wins < computer_wins) {
        return("\nYou lose to the computer with " + player_wins + " wins under " + computer_wins + " computer wins.")
    } else {
        return("\nYou tied the computer with " + player_wins + " wins.")
    }
}
'use strict';

// Score containers
const playerScoreContainer = document.querySelector('.player-score-container');
const computerScoreContainer = document.querySelector('.computer-score-container');

//Scores
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

//Buttons
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resetBtn = document.querySelector('.reset');

//Info messages
const resultMessageText = document.querySelector('.result-text');
const playerMessageText = document.querySelector('.player-choose-text');
const computerMessageText = document.querySelector('.computer-choose-text');

let playerCurrentScore = 0;
let computerCurrentScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        //TIE
        return 'TIE!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') || 
        (playerChoice === 'paper' && computerChoice === 'rock') || 
        (playerChoice === 'scissors' && computerChoice === 'rock')
    ) {
        //WIN STATEMENTS
        playerCurrentScore += 1;
        playerScore.textContent = playerCurrentScore;
        gameOver();
        return 'YOU WON!'
    } else {
        computerCurrentScore += 1;
        computerScore.textContent = computerCurrentScore;
        gameOver();
        return 'COMPUTER WON!'
    }
}

function displayMessages(playerChoice, computerChoice, result) {
    playerMessageText.textContent = `Player Chose: ${playerChoice.toUpperCase()}`;
    computerMessageText.textContent = `Computer Chose: ${computerChoice.toUpperCase()}`;
    resultMessageText.textContent = result;
}

function gameOver () {
    if (playerCurrentScore === 10) {
        playerScoreContainer.style.backgroundColor = 'green';
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    } else if (computerCurrentScore === 10) {
        computerScoreContainer.style.backgroundColor = 'green';
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);
    displayMessages(playerChoice, computerChoice, result);
}

function resetGame() {
    playerMessageText.textContent = '';
    computerMessageText.textContent = '';
    resultMessageText.textContent = '';
    playerScore.textContent = '';
    computerScore.textContent = '';
    playerCurrentScore = 0;
    computerCurrentScore = 0;

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

    playerScoreContainer.style.backgroundColor = 'rgba(88, 88, 88, 0.7)';
    computerScoreContainer.style.backgroundColor = 'rgba(88, 88, 88, 0.7)';
}

rockBtn.addEventListener('click', function () {
    playGame('rock');
});
paperBtn.addEventListener('click', function () {
    playGame('paper');
});
scissorsBtn.addEventListener('click', function () {
    playGame('scissors');
});
resetBtn.addEventListener('click', function () {
    resetGame();
});
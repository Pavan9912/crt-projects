const buttons = document.querySelectorAll('.choice-btn');
const resultText = document.getElementById('resultText');
const playerScoreSpan = document.getElementById('playerScore');
const computerScoreSpan = document.getElementById('computerScore');

let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

// Function to get random computer choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play a round
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    resultText.textContent = `It's a Tie! Both chose ${playerChoice}`;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    resultText.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    playerScore++;
  } else {
    resultText.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    computerScore++;
  }

  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;
}

// Event listeners for buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.dataset.choice;
    playRound(playerChoice);
  });
});

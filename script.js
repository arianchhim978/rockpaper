let roundWinner = '';
let playerScore = 0;
let computerScore = 0;

  function playRound(playerSelection, computerSelection) {
if(playerSelection === computerSelection){
roundWinner = 'tie';
}

if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK')
  );{
    playerScore++
    roundWinner = 'player'
}  if (
    (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
    (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
    (computerSelection === 'PAPER' && playerSelection === 'ROCK')
  ) {
    computerScore++
    roundWinner = 'computer'
  }
}
function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'ROCK'
      case 1:
        return 'PAPER'
      case 2:
        return 'SCISSORS'
    }
  }
  const playerSelection = "rock";
  const computerSelection = getRandomChoice();
 
  
